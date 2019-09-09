import IStepData from '../../../../interfaces/step/IStepData';
import IStepMetadata from '../../../../interfaces/step/IStepMetadata';
import domIdentifiers from '../../../config/domIdentifiers';
import ClassUtil from '../../../util/ClassUtil';
import DomUtil from '../../../util/DomUtil';
import PageUtil from '../../../util/PageUtil';
import Module from '../../Module';
import StepKeyboardShortcutsModule from './keyboard/StepKeyboardShortcutsModule';

/**
 * A module which runs on each individual step page.
 */
export default class StepModule extends Module {
    readonly data: IStepData | null;
    readonly metadata: IStepMetadata | null;
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

    private processData(data: IStepData | null): IStepMetadata | null {
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
        return `(${ current }/${ this.totalSections })`;
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

            target.innerText += ` ${ this.getProgressString(this.sectionNameToIndex[pageName] + 1) }`;
            break;
        }
    }

    private addNavBarProgressIndicator() {
        const navigationBar = PageUtil.getNavigationBar();

        if (!navigationBar || !this.metadata || !this.metadata.current) {
            return;
        }

        const progressElement = document.createElement('li');
        progressElement.innerText = `Progress: ${ this.getProgressString(this.metadata.current.index + 1) }`;

        navigationBar.appendChild(progressElement);
    }

    private addHoverProgressIndicator() {
        const hoverDiv = document.querySelector(`.${ domIdentifiers.stepProgressClass } div`);

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

    start(): void {
        if (!PageUtil.isPageStep) {
            return;
        }

        this.addProgressIndicators();
        this.addDuplicateNav();

        new StepKeyboardShortcutsModule().start();
    }
}