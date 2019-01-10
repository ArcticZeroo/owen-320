const videoId = 'vjs_video_3_html5_api';
const videoClass = 'cl-video';
const quizClass = 'cl-quiz';
const quizContinueKeys: string[] = ['Enter', 'ArrowRight'];
const stepDataId = 'cl-step';
const speedUpKeys: string[] = ['+', '>', ']', 'ArrowRight', 'ArrowUp'];

enum SectionType {
    video = 'V',
    quiz = 'Q',
    section = 'S'
}

interface IStepSection {
    access: number;
    look: number;
    name: string;
    status: string;
    initial: string;
    type: string;
    url: string;
    tag: string;
}

interface IStepData {
    current: string;
    iconalt: string;
    iconurl: string;
    name: string;
    quiz: number;
    review: boolean;
    sections: IStepSection[],
    shortname: string;
    step: boolean;
    tag: string;
    url: string;
}

abstract class Page {
    static isClassElementPresent(className: string): boolean {
        const elements = document.getElementsByClassName(className);

        return !!(elements && elements.length && elements[0]);
    }

    static getNextQuestionButton(): HTMLButtonElement | null {
        return document.querySelector(`.${ quizClass } button`);
    }

    static getVideo(): HTMLVideoElement | null {
        return document.getElementById(videoId) as HTMLVideoElement;
    }

    static getStepData(): IStepData | null {
        const element = document.getElementById(stepDataId);

        if (!element) {
            return null;
        }

        const dataText = element.innerText;

        return JSON.parse(dataText);
    }

    static getNavBarList(): HTMLUListElement | null {
        return document.querySelector('nav ul');
    }

    static get isPageQuiz(): boolean {
        return Page.isClassElementPresent(quizClass);
    }

    static get isPageVideo(): boolean {
        return Page.isClassElementPresent(videoClass);
    }
}

class StepController {
    private readonly _data: IStepData;
    private _currentSection?: IStepSection;
    private _currentSectionIndex?: number;

    constructor() {
        this._data = Page.getStepData();

        this.processData();
    }

    private processData() {
        if (!this._data) {
            return;
        }

        for (let i = 0; i < this._data.sections.length; ++i) {
            const section = this._data.sections[i];

            if (section.tag === this._data.current) {
                this._currentSection = section;
                this._currentSectionIndex = i;
                break;
            }
        }
    }

    displayProgress() {
        if (!this.isStepEnabled) {
            return;
        }

        const navList = Page.getNavBarList();

        if (!navList) {
            console.log('Could not show progress; list is null');
            return;
        }

        const progressElement = document.createElement('li');
        progressElement.innerText = `Progress: ${this.currentSectionIndex + 1}/${this.totalSections} Sections`;

        navList.appendChild(progressElement);
    }

    get isStepEnabled(): boolean {
        return this._data.step;
    }

    get currentSection() {
        return this._currentSection;
    }

    get currentSectionIndex() {
        return this._currentSectionIndex;
    }

    get totalSections() {
        return this._data.sections.length;
    }
}

function setupVideo() {
    const video = Page.getVideo();

    if (!video) {
        console.log('Could not get video');
        return
    }

    video.onclick = function () {
        console.log('Video has been clicked');
    };
}

document.onkeydown = function (e: KeyboardEvent) {
    if (!quizContinueKeys.includes(e.key)) {
        return;
    }

    const nextQuestionButton = Page.getNextQuestionButton();

    if (!nextQuestionButton) {
        return;
    }

    nextQuestionButton.click();
};

console.log('Owen 320 Helper is now running');

if (Page.isPageVideo) {
    console.log('This page has a video');
    setupVideo();
}

if (Page.isPageQuiz) {
    console.log('This page is a quiz');
}

const stepController = new StepController();

stepController.displayProgress();
