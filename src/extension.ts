import Module from './lib/module/Module';
import QuizModule from './lib/module/modules/QuizModule';
import StepModule from './lib/module/modules/StepModule';

Module.loadModules(
    new StepModule(),
    new QuizModule()
);