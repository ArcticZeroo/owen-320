import ClassUtil from '../../util/ClassUtil';

interface IWaitForChildToAppearParams {
    id?: string;
    className?: string;
    parent: Element;
    onFound(element: Element): void;
}

export default class WaitForChildToAppear {
    constructor(readonly params: IWaitForChildToAppearParams) {
        if (!params.id && !params.className) {
            throw new TypeError('Expected either ID or class name to not be null');
        }

        ClassUtil.autoBind(this);
    }

    private onMutation(mutations: MutationRecord[], observer: MutationObserver) {
        for (const mutation of mutations) {
            if (!(mutation.target instanceof Element)) {
                continue;
            }

            if (this.params.id && mutation.target.id === this.params.id) {
                this.params.onFound(mutation.target);
                observer.disconnect();
                return;
            }

            if (this.params.className && mutation.target.className.includes(this.params.className)) {
                this.params.onFound(mutation.target);
                observer.disconnect();
                return;
            }
        }
    }

    liten() {
        if (this.params.id) {
            const element = this.params.parent.querySelector(`#${this.params.id}`);

            if (element) {
                this.params.onFound(element);
                return;
            }
        }

        if (this.params.className) {
            const element = this.params.parent.querySelector(`.${this.params.className}`);

            if (element) {
                this.params.onFound(element);
                return;
            }
        }

        new MutationObserver(this.onMutation)
            .observe(this.params.parent, { childList: true, subtree: true });
    }
}