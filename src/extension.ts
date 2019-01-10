import Module from './lib/module/Module';
import MsuHrefModule from './lib/module/modules/MsuHrefModule';
import QuizModule from './lib/module/modules/QuizModule';
import StepModule from './lib/module/modules/StepModule';
import VideoModule from './lib/module/modules/VideoModule';

Module.loadModules(
    new StepModule(),
    new QuizModule(),
    new VideoModule(),
    new MsuHrefModule()
);