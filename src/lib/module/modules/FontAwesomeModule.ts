import Module from '../Module';

export default class FontAwesomeModule extends Module {
    start(): void {
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://kit.fontawesome.com/f92be839c2.js';
        scriptElement.crossOrigin = 'anonymous';
        document.head.appendChild(scriptElement);
    }
}