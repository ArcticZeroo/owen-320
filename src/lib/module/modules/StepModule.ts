import IStepData from '../../../interfaces/step/IStepData';
import IStepMetadata from '../../../interfaces/step/IStepMetadata';
import domIdentifiers from '../../config/domIdentifiers';
import PageUtil from '../../util/PageUtil';
import Module from '../Module';

export default class StepModule extends Module {
    readonly data: IStepData | null;
    readonly metadata: IStepMetadata | null;

    constructor() {
        super();

        this.data = StepModule.getStepData();
        this.metadata = StepModule.processData(this.data);
    }

    static getStepData(): IStepData | null {
        const element = document.getElementById(domIdentifiers.stepDataId);

        if (!element) {
            return null;
        }

        const dataText = element.innerText;

        return JSON.parse(dataText);
    }

    static processData(data: IStepData | null): IStepMetadata | null {
        if (!data) {
            return null;
        }

        if (!data.step) {
            return { isStepEnabled: false };
        }

        let current;

        for (let i = 0; i < data.sections.length; ++i) {
            const section = data.sections[i];

            if (section.tag === data.current) {
                current = {
                    section,
                    index: i
                };
                break;
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

    private get totalSections(): number {
        return (this.data && this.data.sections && this.data.sections.length) || 0;
    }

    start(): void {
        if (!this.data || !this.metadata || !this.metadata.isStepEnabled) {
            return;
        }

        if (!this.metadata.current) {
            return;
        }

        console.log('Current section:', this.metadata.current);
        console.log('Total sections:', this.totalSections);

        const navigationBar = PageUtil.getNavigationBar();

        if (!navigationBar) {
            return;
        }

        const progressElement = document.createElement('li');
        progressElement.innerText = `Progress: (${this.metadata.current.index + 1}/${this.totalSections})`;

        navigationBar.appendChild(progressElement);
    }
}