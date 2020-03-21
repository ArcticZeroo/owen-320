import StepNavController from '../../../../api/step/StepNavController';
import PageUtil from '../../../../util/PageUtil';
import Module from '../../../Module';

export default class StepKeyboardShortcutsModule extends Module {
    private readonly stepNavController: StepNavController = new StepNavController();
    private readonly shortcuts: Map<String[], Function> = new Map();

    private addKeyboardHooks() {
        window.addEventListener('keydown', (event) => {
            if (!PageUtil.canUseKeyboardShortcuts) {
                return;
            }

            // We only want to trigger the event if shift is pressed with the key
            if (!event.shiftKey || event.key === 'Shift') {
                return;
            }

            for (const [keys, shortcut] of this.shortcuts) {
                if (keys.includes(event.key)) {
                    shortcut();
                    event.preventDefault();
                    return;
                }
            }
        });
    }

    start(): void {
        this.shortcuts.set(['N'], this.stepNavController.goToNext);
        this.shortcuts.set(['B'], this.stepNavController.goToPrevious);
        this.shortcuts.set(['L'], this.stepNavController.goToList);
        this.shortcuts.set(['M'], this.stepNavController.goToNextAndMark);

        this.addKeyboardHooks();
    }
}