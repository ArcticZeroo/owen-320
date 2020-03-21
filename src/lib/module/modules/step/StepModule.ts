import Optional from '../../../../interfaces/Optional';
import IStepData from '../../../../interfaces/step/IStepData';
import IStepMetadata from '../../../../interfaces/step/IStepMetadata';
import constants from '../../../config/constants';
import domIdentifiers from '../../../config/domIdentifiers';
import localStorageIdentifiers from '../../../config/localStorageIdentifiers';
import SectionStatus from '../../../enum/SectionStatus';
import ClassUtil from '../../../util/ClassUtil';
import DomUtil from '../../../util/DomUtil';
import PageUtil from '../../../util/PageUtil';
import StorageUtil from '../../../util/StorageUtil';
import Module from '../../Module';
import StepKeyboardShortcutsModule from './keyboard/StepKeyboardShortcutsModule';
import local = chrome.storage.local;

/**
 * A module which runs on each individual step page.
 */
export default class StepModule extends Module {
    private static readonly stepBodyLimitsInPx = [575, 1000];
    private static readonly sidebarMinWidthInPx = 250;
    private static readonly sectionTypeToIconName = {
        'V': 'fas fa-video',
        'S': 'fas fa-pencil-alt',
        'Q': 'fas fa-vial',
        'T': 'fas fa-hammer',
        Unknown: 'fas fa-question'
    };

    // Holds all the data for the current step
    readonly data: Optional<IStepData>;
    // Holds the metadata for the current section
    readonly metadata: Optional<IStepMetadata>;
    private sectionHoverDiv?: HTMLElement;
    private sectionNameToIndex: { [key: string]: number } = {};

    constructor() {
        super();

        ClassUtil.autoBind(this);

        this.data = StepModule.getStepData();
        this.metadata = this.processData(this.data);
    }

    static getStepData(): IStepData | null {
        const element = document.getElementById(domIdentifiers.stepDataId);

        if (!element) {
            return null;
        }

        const dataText = element.innerText;

        return JSON.parse(dataText);
    }

    private processData(data: Optional<IStepData>): Optional<IStepMetadata> {
        if (!data) {
            return null;
        }

        if (!data.step) {
            return { isStepEnabled: false };
        }

        let current;

        for (let i = 0; i < data.sections.length; ++i) {
            const section = data.sections[i];

            this.sectionNameToIndex[section.name] = i;

            if (!current && section.tag === data.current) {
                current = {
                    section,
                    index: i
                };
            }
        }

        if (!current) {
            return { isStepEnabled: true };
        }

        return {
            isStepEnabled: true,
            current
        };
    }

    private getProgressString(current: number) {
        return `(${current}/${this.totalSections})`;
    }

    private get totalSections(): number {
        return (this.data && this.data.sections && this.data.sections.length) || 0;
    }

    private onSectionHoverMutate(mutations: MutationRecord[]) {
        for (const mutation of mutations) {
            let target: HTMLElement;

            if (mutation.target instanceof HTMLElement) {
                target = mutation.target;
            } else {
                if (mutation.type === 'characterData' && this.sectionHoverDiv) {
                    target = this.sectionHoverDiv;
                } else {
                    continue;
                }
            }

            let pageName = target.innerText.trim();

            if (!this.sectionNameToIndex.hasOwnProperty(pageName)) {
                if (pageName.endsWith('(cont)')) {
                    pageName = pageName.replace(/\s+\(cont\)\s*/, '').trim();
                }

                // Check again in case the cont removal fixed it
                if (!this.sectionNameToIndex.hasOwnProperty(pageName)) {
                    continue;
                }
            }

            target.innerText += ` ${this.getProgressString(this.sectionNameToIndex[pageName] + 1)}`;
            break;
        }
    }

    private addNavBarProgressIndicator() {
        const navigationBar = PageUtil.getNavigationBar();

        if (!navigationBar || !this.metadata || !this.metadata.current) {
            return;
        }

        const progressElement = document.createElement('li');
        progressElement.innerText = `Progress: ${this.getProgressString(this.metadata.current.index + 1)}`;

        navigationBar.appendChild(progressElement);
    }

    private addHoverProgressIndicator() {
        const hoverDiv = document.querySelector(`.${domIdentifiers.stepProgressClass} div`);

        if (!hoverDiv) {
            return;
        }

        this.sectionHoverDiv = hoverDiv as HTMLElement;

        new MutationObserver(this.onSectionHoverMutate)
            .observe(hoverDiv, { characterData: true, attributes: true, subtree: true });
    }

    private addProgressIndicators() {
        this.addNavBarProgressIndicator();
        this.addHoverProgressIndicator();
    }

    private addDuplicateNav() {
        const nav = document.getElementsByClassName(domIdentifiers.navDivClass)[0];

        if (!nav) {
            console.error('Could not find navigation bar to duplicate');
            return;
        }

        const content = document.getElementsByClassName('content')[0];

        if (!content) {
            console.error('Could not find content to duplicate navigation bar to');
            return;
        }

        const clonedNav = nav.cloneNode(true) as HTMLDivElement;

        const completeStepButton = nav.getElementsByClassName('cl-step-completed-next')[0] as HTMLLinkElement;
        const clonedCompleteStepButton = clonedNav.getElementsByClassName('cl-step-completed-next')[0] as HTMLLinkElement;

        if (completeStepButton || clonedCompleteStepButton) {
            clonedCompleteStepButton.addEventListener('click', function (e) {
                e.preventDefault();
                completeStepButton.click();
            });
        }

        const originalCanvas = nav.querySelector('canvas');
        const clonedCanvas = clonedNav.querySelector('canvas');

        if (originalCanvas && clonedCanvas) {
            DomUtil.cloneCanvas(originalCanvas, clonedCanvas);
            clonedCanvas.title = 'Hovering on the duplicate nav is not currently supported';
        }

        content.insertAdjacentElement('afterend', clonedNav);
    }

    private static getRemainingWidthPerSide(): number {
        const [, stepBodyMax] = StepModule.stepBodyLimitsInPx;
        const minPossibleWidthInPx = (document.body.clientWidth - stepBodyMax) / 2;

        const owenBody = document.getElementsByClassName(domIdentifiers.owenBodyClass)[0];
        if (!owenBody) {
            return minPossibleWidthInPx;
        }

        const computedStyle = getComputedStyle(owenBody);

        if (!computedStyle.marginLeft) {
            return minPossibleWidthInPx;
        }

        return Number.parseInt(computedStyle.marginLeft.replace(/[^-\d.]/g, ''));
    }

    addSidebar() {
        if (!this.data || !this.metadata || !this.metadata.current) {
            return;
        }

        const sidebarWidthInPx = Math.max(StepModule.getRemainingWidthPerSide(), StepModule.sidebarMinWidthInPx);

        console.log('width should be', sidebarWidthInPx);

        const sidebar = document.createElement('div');
        const sidebarHeader = document.createElement('div');
        const sidebarTitle = document.createElement('div');
        const sectionTable = document.createElement('table');

        sidebar.className = `${constants.classPrefix}step-sidebar`;
        sidebar.style.width = sidebarWidthInPx + 'px';

        sidebarHeader.className = `${constants.classPrefix}sidebar-header`;

        let completeCount = 0;
        for (const section of this.data.sections) {
            const sectionRow = document.createElement('tr');

            const sectionStatusContainer = document.createElement('td');
            const sectionStatusIcon = document.createElement('i');
            sectionStatusContainer.appendChild(sectionStatusIcon);

            const sectionStatusIconClass = StepModule.sectionTypeToIconName[section.type] || StepModule.sectionTypeToIconName.Unknown;
            const sectionStatusTypeClass = `${constants.classPrefix}section-status-${section.status}`;
            const sectionStatusCurrentClass = `${constants.classPrefix}section-current-${section.tag === this.metadata.current.section.tag}`;
            sectionStatusIcon.className = `${sectionStatusIconClass} ${sectionStatusTypeClass} ${sectionStatusCurrentClass}`;

            if (section.status === SectionStatus.done || section.status === SectionStatus.viewed) {
                let title = `First viewed at ${new Date(section.look * 1000).toLocaleString()}`;
                if (section.status === SectionStatus.done) {
                    title += `, marked complete at ${new Date(section.access * 1000).toLocaleString()}`;
                    completeCount++;
                }
                sectionStatusContainer.title = title;
            } else {
                sectionStatusContainer.title = 'Not yet viewed';
            }

            const sectionLinkContainer = document.createElement('td');
            const sectionLink = document.createElement('a');
            sectionLinkContainer.appendChild(sectionLink);

            sectionLink.href = section.url;
            sectionLink.innerText = section.name;

            sectionRow.appendChild(sectionStatusContainer);
            sectionRow.appendChild(sectionLinkContainer);

            sectionTable.appendChild(sectionRow);
        }

        sidebarTitle.innerText = this.data.name + ' ' + this.getProgressString(completeCount);

        let isExpanded = true;

        const sidebarExpandButtonIcon = document.createElement('i');

        const updateSidebarExpansion = () => {
            StorageUtil.setItem(localStorageIdentifiers.sidebarExpanded, isExpanded);

            if (isExpanded) {
                sidebar.style.height = window.innerHeight + 'px';
            } else {
                const paddingTopInPx = Number.parseInt((window.getComputedStyle(sidebar).paddingTop || '0').replace(/[^\d]/g, ''));
                sidebar.style.height = (sidebarHeader.offsetHeight + paddingTopInPx * 2) + 'px';
            }

            sidebarHeader.title = 'Click to ' + (isExpanded ? 'collapse' : 'expand');
            sidebar.style.overflow = isExpanded ? 'auto' : 'hidden';
            sectionTable.style.visibility = isExpanded ? 'visible' : 'collapse';
            sidebarExpandButtonIcon.className = `${constants.classPrefix}sidebar-expand-icon fas fa-${isExpanded ? 'minus' : 'plus'}`;
        };

        sidebarHeader.addEventListener('click', e => {
            e.preventDefault();
            isExpanded = !isExpanded;
            updateSidebarExpansion();
        });

        sidebarHeader.appendChild(sidebarTitle);
        sidebarHeader.appendChild(sidebarExpandButtonIcon);

        sidebar.appendChild(sidebarHeader);
        sidebar.appendChild(sectionTable);
        document.body.appendChild(sidebar);

        const scrollBarWidth = sidebar.offsetWidth - sidebar.clientWidth;
        if (scrollBarWidth > 0) {
            sidebar.style.width = (sidebarWidthInPx - scrollBarWidth) + 'px';
        }

        const storedSidebarExpansion = StorageUtil.getItem(localStorageIdentifiers.sidebarExpanded) === 'true';

        // doing this here so we have offset values intact
        updateSidebarExpansion();

        if (storedSidebarExpansion != isExpanded) {
            isExpanded = storedSidebarExpansion;
            updateSidebarExpansion();
        }
    }

    start(): void {
        if (!PageUtil.isPageStep) {
            return;
        }

        this.addProgressIndicators();
        this.addDuplicateNav();
        this.addSidebar();

        new StepKeyboardShortcutsModule().start();
    }
}