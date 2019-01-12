import QuizListener, { IQuestionData } from '../../api/quiz/QuizListener';
import domIdentifiers from '../../config/domIdentifiers';
import ClassUtil from '../../util/ClassUtil';
import PageUtil from '../../util/PageUtil';
import Module from '../Module';

export default class QuizModule extends Module {
    private static quizContinueKeys: string[] = ['Enter', 'ArrowRight'];
    private quizContainer: HTMLDivElement;

    static getNextQuestionButton(): HTMLButtonElement | null {
        return document.querySelector(`.${domIdentifiers.quizClass} button`);
    }

    constructor() {
        super();

        ClassUtil.autoBind(this);

        this.quizContainer = document.getElementsByClassName(domIdentifiers.quizClass)[0] as HTMLDivElement;
    }

    private addNextQuizButtonHooks() {
        document.onkeydown = (e: KeyboardEvent) => {
            if (!QuizModule.quizContinueKeys.includes(e.key)) {
                return;
            }

            const nextQuestionButton = QuizModule.getNextQuestionButton();

            if (!nextQuestionButton || !nextQuestionButton.innerText.toLowerCase().includes('next')) {
                return;
            }

            nextQuestionButton.click();
        };
    }

    private onNewQuizQuestion() {
        const inputs = this.quizContainer.getElementsByTagName('input');
        let hasFocused: boolean = false;

        for (const input of inputs) {
            input.setAttribute('autocomplete', 'off');

            if (!hasFocused && !input.hidden && input.type !== 'hidden' && input.style.display !== 'none') {
                input.focus();
                hasFocused = true;
            }
        }
    }

    start(): void {
        if (!PageUtil.isPageQuiz) {
            return;
        }

        this.addNextQuizButtonHooks();

        new QuizListener({ onQuestion: this.onNewQuizQuestion }).listen();
    }
}
