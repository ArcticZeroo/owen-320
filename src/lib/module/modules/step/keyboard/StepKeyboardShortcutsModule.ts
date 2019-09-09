import StepNavController from '../../../../api/step/StepNavController';
import Module from '../../../Module';

export default class StepKeyboardShortcutsModule extends Module {
    private static readonly illegalActiveTagNamesForShortcuts = ['input', 'textarea'];
    private readonly stepNavController: StepNavController = new StepNavController();
    private readonly shortcuts: Map<String[], Function> = new Map();

    private get canUseKeyboardShortcuts(): boolean {
        const activeElement = document.activeElement;

        if (!activeElement) {
            return true;
        }

        return !StepKeyboardShortcutsModule.illegalActiveTagNamesForShortcuts.includes(activeElement.tagName);
    }

    private addKeyboardHooks() {
        window.addEventListener('keydown', (event) => {
            if (!this.canUseKeyboardShortcuts) {
                return;
            }

            // We only want to trigger the event if shift is pressed with the key
            if (!event.shiftKey || event.key === 'Shift') {
                return;
            }

            for (const [keys, shortcut] of this.shortcuts) {
                if (keys.includes(event.key)) {
                    shortcut();
                    break;
                }
            }
        });
    }

    start(): void {
        this.shortcuts.set(['KeyN'], this.stepNavController.goToNext);
        this.shortcuts.set(['KeyB'], this.stepNavController.goToPrevious);
        this.shortcuts.set(['KeyL'], this.stepNavController.goToList);
        this.shortcuts.set(['KeyM'], this.stepNavController.goToNextAndMark);

        this.addKeyboardHooks();
    }
}