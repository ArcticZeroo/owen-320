import ISiteData from '../../interfaces/site/ISiteData';
import domIdentifiers from '../config/domIdentifiers';
export default abstract class PageUtil {
    private static readonly illegalActiveTagNamesForShortcuts = ['input', 'textarea'];

    static isClassElementPresent(className: string): boolean {
        const elements = document.getElementsByClassName(className);

        return !!(elements && elements.length && elements[0]);
    }

    static get isPageCourseLib(): boolean {
        return Boolean(document.getElementById(domIdentifiers.siteDataId))
    }

    static get isPageStep(): boolean {
        return !!document.getElementById(domIdentifiers.stepDataId);
    }

    static get isPageQuiz(): boolean {
        return PageUtil.isClassElementPresent(domIdentifiers.quizClass);
    }

    static get isPageVideo(): boolean {
        return PageUtil.isClassElementPresent(domIdentifiers.videoCourseLibClass);
    }

    static getNavigationBar(): HTMLUListElement | null {
        return document.querySelector('nav ul');
    }

    static getSiteData(): ISiteData | null {
        const siteDataElement = document.getElementById(domIdentifiers.siteDataId);

        if (!siteDataElement) {
            return null;
        }

        return JSON.parse(siteDataElement.innerText);
    }

    static get canUseKeyboardShortcuts(): boolean {
        const activeElement = document.activeElement;

        if (!activeElement) {
            return true;
        }

        if ((<HTMLElement>activeElement).isContentEditable) {
            return false;
        }

        return !PageUtil.illegalActiveTagNamesForShortcuts.includes(activeElement.tagName.toLowerCase());
    }
}
