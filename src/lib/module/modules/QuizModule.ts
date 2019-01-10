import domIdentifiers from '../../config/domIdentifiers';
import PageUtil from '../../util/PageUtil';
import Module from '../Module';

export default class QuizModule extends Module {
    static quizContinueKeys: string[] = ['Enter', 'ArrowRight'];

    static getNextQuestionButton(): HTMLButtonElement | null {
        return document.querySelector(`.${domIdentifiers.quizClass} button`);
    }

    start(): void {
        if (!PageUtil.isPageQuiz) {
            return;
        }

        document.onkeydown = (e: KeyboardEvent) => {
            if (!QuizModule.quizContinueKeys.includes(e.key)) {
                return;
            }

            const nextQuestionButton = QuizModule.getNextQuestionButton();

            if (!nextQuestionButton) {
                return;
            }

            nextQuestionButton.click();
        };
    }
}
