import domIdentifiers from '../config/domIdentifiers';
export default abstract class PageUtil {
    static isClassElementPresent(className: string): boolean {
        const elements = document.getElementsByClassName(className);

        return !!(elements && elements.length && elements[0]);
    }

    static get isPageQuiz(): boolean {
        return PageUtil.isClassElementPresent(domIdentifiers.quizClass);
    }

    static get isPageVideo(): boolean {
        return PageUtil.isClassElementPresent(domIdentifiers.videoClass);
    }

    static getNavigationBar(): HTMLUListElement | null {
        return document.querySelector('nav ul');
    }
}
