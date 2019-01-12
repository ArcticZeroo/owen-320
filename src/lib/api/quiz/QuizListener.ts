import domIdentifiers from '../../config/domIdentifiers';
import ClassUtil from '../../util/ClassUtil';

interface IQuizListenerParams {
    onStart?(data: IQuestionData): void;
    onQuestion?(data: IQuestionData): void;
}

export interface IQuestionData {
    current: number;
    total: number;
}

export default class QuizListener {
    private static questionRegex = /^question (\d+) of (\d+)$/i;
    private readonly quizContainer: HTMLElement;
    private currentQuestion: number;

    constructor(readonly params: IQuizListenerParams) {
        this.quizContainer = document.getElementsByClassName(domIdentifiers.quizClass)[0] as HTMLElement;
        this.currentQuestion = 0;

        ClassUtil.autoBind(this);
    }

    private getQuestionDataFromMatch(match: RegExpMatchArray): IQuestionData {
        const current = parseInt(match[1]);
        const total = parseInt(match[2]);

        return { current, total };
    }

    private onContainerMutate(mutations: MutationRecord[], observer: MutationObserver) {
        const h2 = this.quizContainer.querySelector('h2');

        if (!h2) {
            return;
        }

        if (!QuizListener.questionRegex.test(h2.innerText)) {
            return;
        }

        observer.disconnect();

        const match = h2.innerText.match(QuizListener.questionRegex);

        if (!match) {
            return;
        }


        const data = this.getQuestionDataFromMatch(match);

        this.currentQuestion = data.current;

        if (this.params.onStart) {
            this.params.onStart(data);
        }

        if (this.params.onQuestion) {
            this.params.onQuestion(data);
        }

        this.listenForQuizQuestionChange();
    }

    private onQuizHeaderMutation() {
        const h2 = this.quizContainer.querySelector('h2');

        if (!h2) {
            return;
        }

        if (!QuizListener.questionRegex.test(h2.innerText)) {
            return;
        }

        const match = h2.innerText.match(QuizListener.questionRegex);

        if (!match) {
            return;
        }

        const data = this.getQuestionDataFromMatch(match);

        if (data.current === this.currentQuestion) {
            return;
        }

        this.currentQuestion = data.current;

        if (this.params.onQuestion) {
            this.params.onQuestion(data);
        }
    }

    private listenForQuizQuestionChange() {
        new MutationObserver(this.onQuizHeaderMutation)
            .observe(this.quizContainer, { subtree: true, characterData: true, childList: true });
    }

    private listenForQuizStart() {
        new MutationObserver(this.onContainerMutate)
            .observe(this.quizContainer, { subtree: true, childList: true, characterData: true, attributes: true });
    }

    listen() {
        this.listenForQuizStart();
    }
}