var videoId = 'vjs_video_3_html5_api';
var videoClass = 'cl-video';
var quizClass = 'cl-quiz';
var quizContinueKeys = ['Enter', 'ArrowRight'];
var stepDataId = 'cl-step';
var speedUpKeys = ['+', '>', ']', 'ArrowRight', 'ArrowUp'];
var SectionType;
(function (SectionType) {
    SectionType["video"] = "V";
    SectionType["quiz"] = "Q";
    SectionType["section"] = "S";
})(SectionType || (SectionType = {}));
var Page = /** @class */ (function () {
    function Page() {
    }
    Page.isClassElementPresent = function (className) {
        var elements = document.getElementsByClassName(className);
        return !!(elements && elements.length && elements[0]);
    };
    Page.getNextQuestionButton = function () {
        return document.querySelector("." + quizClass + " button");
    };
    Page.getVideo = function () {
        return document.getElementById(videoId);
    };
    Page.getStepData = function () {
        var element = document.getElementById(stepDataId);
        var dataText = element.innerText;
        return JSON.parse(dataText);
    };
    Page.getNavBarList = function () {
        return document.querySelector('nav ul');
    };
    Object.defineProperty(Page, "isPageQuiz", {
        get: function () {
            return Page.isClassElementPresent(quizClass);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page, "isPageVideo", {
        get: function () {
            return Page.isClassElementPresent(videoClass);
        },
        enumerable: true,
        configurable: true
    });
    return Page;
}());
var StepController = /** @class */ (function () {
    function StepController() {
        this._data = Page.getStepData();
        this.processData();
    }
    StepController.prototype.processData = function () {
        for (var i = 0; i < this._data.sections.length; ++i) {
            var section = this._data.sections[i];
            if (section.tag === this._data.current) {
                this._currentSection = section;
                this._currentSectionIndex = i;
                break;
            }
        }
    };
    StepController.prototype.displayProgress = function () {
        var navList = Page.getNavBarList();
        if (!navList) {
            console.log('Could not show progress; list is null');
            return;
        }
        var progressElement = document.createElement('li');
        progressElement.innerText = "Progress: " + (this.currentSectionIndex + 1) + "/" + this.totalSections + " Sections";
        navList.appendChild(progressElement);
    };
    Object.defineProperty(StepController.prototype, "isStepEnabled", {
        get: function () {
            return this._data.step;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepController.prototype, "currentSection", {
        get: function () {
            return this._currentSection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepController.prototype, "currentSectionIndex", {
        get: function () {
            return this._currentSectionIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepController.prototype, "totalSections", {
        get: function () {
            return this._data.sections.length;
        },
        enumerable: true,
        configurable: true
    });
    return StepController;
}());
function setupVideo() {
    var video = Page.getVideo();
    if (!video) {
        console.log('Could not get video');
        return;
    }
    video.onclick = function () {
        console.log('Video has been clicked');
    };
}
document.onkeydown = function (e) {
    if (!quizContinueKeys.includes(e.key)) {
        return;
    }
    var nextQuestionButton = Page.getNextQuestionButton();
    if (!nextQuestionButton) {
        return;
    }
    nextQuestionButton.click();
};
console.log('Owen 320 Helper is now running');
if (Page.isPageVideo) {
    console.log('This page has a video');
    setupVideo();
}
if (Page.isPageQuiz) {
    console.log('This page is a quiz');
}
var stepController = new StepController();
//# sourceMappingURL=content.js.map