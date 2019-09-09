import domIdentifiers from '../../config/domIdentifiers';
import ClassUtil from '../../util/ClassUtil';

export default class StepNavController {
    private readonly listLink: HTMLAnchorElement;
    private readonly previousLink: HTMLAnchorElement;
    private readonly nextLink: HTMLAnchorElement;
    private readonly nextAndMarkLink: HTMLAnchorElement;

    constructor(stepNavDiv?: Element) {
        ClassUtil.autoBind(this);

        if (!stepNavDiv) {
            stepNavDiv = document.getElementsByClassName(domIdentifiers.navDivClass)[0];
        }

        [
            this.listLink,
            this.previousLink,
            this.nextLink,
            this.nextAndMarkLink
        ] = Array.from(stepNavDiv.getElementsByTagName('a'));
    }

    goToList() {
        this.listLink.click();
    }

    goToPrevious() {
        this.previousLink.click();
    }

    goToNext() {
        this.nextLink.click();
    }

    goToNextAndMark() {
        this.nextAndMarkLink.click();
    }
}