import QuizListener, { IQuestionData } from '../../../api/quiz/QuizListener';
import domIdentifiers from '../../../config/domIdentifiers';
import ClassUtil from '../../../util/ClassUtil';
import PageUtil from '../../../util/PageUtil';
import Module from '../../Module';

export default class QuizModule extends Module {
    private static quizContinueKeys: string[] = ['Enter', 'ArrowRight'];
    private readonly quizContainer: HTMLDivElement;

    static getNextQuestionButton(): HTMLButtonElement | null {
        return document.querySelector(`.${domIdentifiers.quizClass} button`);
    }

    constructor() {
        super();

        ClassUtil.autoBind(this);

        this.tryToGoToNextQuestion = Debounce.debounceMethod(100, this.tryToGoToNextQuestion);
        this.quizContainer = document.getElementsByClassName(domIdentifiers.quizClass)[0] as HTMLDivElement;
    }

    private startQuizWithResult(): boolean {
        if (!this.quizContainer) {
            return false;
        }

        const startQuizTag = this.quizContainer.querySelector('a');

        if (!startQuizTag) {
            return false;
        }

        if (!startQuizTag.innerText.includes('click to proceed to the quiz.')) {
            return false;
        }

        startQuizTag.click();
        return true;
    }

    private tryToGoToNextQuestion() {
        const nextQuestionButton = QuizModule.getNextQuestionButton();

        if (!nextQuestionButton || !nextQuestionButton.innerText.toLowerCase().includes('next')) {
            return;
        }

        nextQuestionButton.click();
    }

    private addNextButtonHooks() {
        document.addEventListener('keydown', (e: KeyboardEvent) => {
            if (!QuizModule.quizContinueKeys.includes(e.key)) {
                return;
            }

            const couldStartQuiz = this.startQuizWithResult();

            if (couldStartQuiz) {
                return;
            }

            this.tryToGoToNextQuestion();
        });
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

        this.addNextButtonHooks();

        new QuizListener({ onQuestion: this.onNewQuizQuestion }).listen();
    }
}
