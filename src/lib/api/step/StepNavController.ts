import Optional from '../../../interfaces/Optional';
import domIdentifiers from '../../config/domIdentifiers';
import ClassUtil from '../../util/ClassUtil';

export default class StepNavController {
    private readonly listLink: Optional<HTMLAnchorElement>;
    private readonly previousLink: Optional<HTMLAnchorElement>;
    private readonly nextLink: Optional<HTMLAnchorElement>;
    private readonly nextAndMarkLink: Optional<HTMLAnchorElement>;

    private static imgToLink(img: Optional<Element>): Optional<HTMLAnchorElement> {
        if (!img) {
            return null;
        }

        return img.parentElement as HTMLAnchorElement;
    }

    constructor(stepNavDiv?: Element) {
        ClassUtil.autoBind(this);

        if (!stepNavDiv) {
            stepNavDiv = document.getElementsByClassName(domIdentifiers.navDivClass)[0];
        }

        this.listLink = StepNavController.imgToLink(stepNavDiv.querySelector(domIdentifiers.navListSelector));

        const [
            previousImg,
            nextImg,
            nextAndMarkImg
        ] = Array.from(stepNavDiv.querySelectorAll(domIdentifiers.navArrowsSelector));

        this.previousLink = StepNavController.imgToLink(previousImg);
        this.nextLink = StepNavController.imgToLink(nextImg);
        this.nextAndMarkLink = StepNavController.imgToLink(nextAndMarkImg);
    }

    goToList() {
        this.listLink && this.listLink.click();
    }

    goToPrevious() {
        this.previousLink && this.previousLink.click();
    }

    goToNext() {
        this.nextLink && this.nextLink.click();
    }

    goToNextAndMark() {
        this.nextAndMarkLink && this.nextAndMarkLink.click();
    }
}