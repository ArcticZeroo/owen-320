import Module from './lib/module/Module';
import MsuHrefModule from './lib/module/modules/MsuHrefModule';
import QuizModule from './lib/module/modules/step/QuizModule';
import StepModule from './lib/module/modules/step/StepModule';
import VideoModule from './lib/module/modules/step/VideoModule';
import PageUtil from './lib/util/PageUtil';

if (PageUtil.isPageCourseLib) {
   Module.loadModules(
       new StepModule(),
       new QuizModule(),
       new VideoModule(),
       new MsuHrefModule()
   );
}
