import domIdentifiers from '../../config/domIdentifiers';
import PageUtil from '../../util/PageUtil';
import Module from '../Module';

export default class MsuHrefModule extends Module {
    start(): void {
        const data = PageUtil.getSiteData();

        if (!data) {
            return;
        }

        const linkElement = document.querySelector(`.${domIdentifiers.msuLinkHeaderClass} a`);

        if (!linkElement) {
            return;
        }

        linkElement.setAttribute('href', data.root);
    }
}