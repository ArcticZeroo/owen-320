import domIdentifiers from '../../../config/domIdentifiers';
import localStorageIdentifiers from '../../../config/localStorageIdentifiers';
import TapEventListener from '../../../event/TapEventListener';
import ClassUtil from '../../../util/ClassUtil';
import PageUtil from '../../../util/PageUtil';
import StorageUtil from '../../../util/StorageUtil';
import Module from '../../Module';

export default class VideoModule extends Module {
    private static _secondsToScrub: number = 5;
    private static _playbackRateIncrementInSeconds: number = 0.125;
    private _playbackRate: number = VideoModule.getPlaybackSpeedFromStorage();
    private _video?: HTMLVideoElement;
    private _videoContainer?: HTMLElement;
    private _playbackDisplay?: HTMLElement;
    private _windowKeyHandlers?: (e: KeyboardEvent) => void;

    private static getPlaybackSpeedFromStorage(): number {
        const storedPlaybackSpeedString = StorageUtil.getItem(localStorageIdentifiers.videoPlaybackSpeed);

        if (!storedPlaybackSpeedString) {
            return 1.0;
        }

        const storedPlaybackSpeedValue = Number.parseFloat(storedPlaybackSpeedString);

        if (Number.isNaN(storedPlaybackSpeedValue)) {
            return 1.0;
        }

        return storedPlaybackSpeedValue;
    }

    constructor() {
        super();

        ClassUtil.autoBind(this);
    }

    private onMutation(mutations: MutationRecord[]): void {
       for (const mutation of mutations) {
           if (!(mutation.target instanceof Element)) {
               continue;
           }

           if (mutation.target.classList.contains(domIdentifiers.videoElementClass)) {
               this.addVideoHooks(mutation.target as HTMLVideoElement);
               return;
           }
       }
    }

    private async toggleVideoState() {
        if (!this._video) {
            return;
        }

        if (this._video.paused) {
           return this._video.play();
        }

        return this._video.pause();
    }

    private onTap() {
       this.toggleVideoState()
           .catch(e => console.error('Unable to toggle video state:', e));
    }

    private updatePlaybackRate(newPlaybackRate: number) {
        if (!this._video) {
            return;
        }

        // 16 is the maximum value for a video element's playback rate
        newPlaybackRate = Math.max(0, Math.min(newPlaybackRate, 16));

        this._playbackRate = newPlaybackRate;
        this._video.playbackRate = newPlaybackRate;
        StorageUtil.setItem(localStorageIdentifiers.videoPlaybackSpeed, newPlaybackRate);

        if (this._playbackDisplay) {
            this._playbackDisplay.innerText = `Playback Speed: ${newPlaybackRate}`;
        }
    }

    private addKeyHandlers(video: HTMLVideoElement) {
        if (this._windowKeyHandlers) {
            window.removeEventListener('keydown', this._windowKeyHandlers);
        }

        this._windowKeyHandlers = (e: KeyboardEvent) => {
            if (!PageUtil.canUseKeyboardShortcuts) {
                return;
            }

            if (['ArrowLeft'].includes(e.key)) {
                video.currentTime = Math.max(video.currentTime - VideoModule._secondsToScrub, 0);
                e.preventDefault();
                return;
            }

            if (['ArrowRight'].includes(e.key)) {
                video.currentTime = Math.min(video.duration, video.currentTime + VideoModule._secondsToScrub);
                e.preventDefault();
                return;
            }

            if (['_', '-'].includes(e.key)) {
                this.updatePlaybackRate(this._playbackRate - VideoModule._playbackRateIncrementInSeconds);
                e.preventDefault();
                return;
            }

            if (['+', '='].includes(e.key)) {
                this.updatePlaybackRate(this._playbackRate + VideoModule._playbackRateIncrementInSeconds);
                e.preventDefault();
                return;
            }

            if (['0'].includes(e.key)) {
                this.updatePlaybackRate(1.0);
                e.preventDefault();
                return;
            }

            if ([' ', 'Space', 'Enter'].includes(e.key)) {
                this.onTap();
                e.preventDefault();
                return;
            }
        };

        window.addEventListener('keydown', this._windowKeyHandlers);
    }

    private addTapHandler(videoContainer: HTMLElement) {
        const tapListener = new TapEventListener(videoContainer, this.onTap);
        tapListener.listen();
    }

    private addVideoPlayHandler(video: HTMLVideoElement) {
        video.addEventListener('play', () => {
            video.playbackRate = this._playbackRate;
        });
    }

    private setupPlaybackDisplay() {
        if (this._playbackDisplay) {
            return;
        }

        const videoContentDiv = document.getElementsByClassName(domIdentifiers.videoCourseLibClass)[0];

        if (videoContentDiv) {
            this._playbackDisplay = document.createElement('div');
            this.updatePlaybackRate(this._playbackRate);
            videoContentDiv.insertAdjacentElement('afterend', this._playbackDisplay);
        }
    }

    private centerPlayButton(videoContainer: HTMLElement) {
        const { offsetHeight: containerHeight, offsetWidth: containerWidth } = videoContainer;

        const playButton = document.getElementsByClassName(domIdentifiers.videoPlayButtonClass)[0];

        if (!playButton) {
            return;
        }

        if (!(playButton instanceof HTMLElement)) {
            return;
        }

        const { offsetHeight: buttonHeight, offsetWidth: buttonWidth } = playButton;

        if (!containerHeight || !containerWidth || !buttonHeight || !buttonWidth) {
            return;
        }

        const newTop = (containerHeight - buttonHeight) / 2;
        const newLeft = (containerWidth - buttonWidth) / 2;

        playButton.style.top = `${newTop}px`;
        playButton.style.left = `${newLeft}px`;
    }


    private addVideoHooks(video: HTMLVideoElement) {
        // Don't add hooks to the same video instance twice
        if (this._video === video) {
            return;
        }

        const videoContainer = document.getElementsByClassName(domIdentifiers.videoContainerClass)[0];

        if (!videoContainer || !(videoContainer instanceof HTMLElement)) {
            return;
        }

        this._videoContainer = videoContainer;
        this._video = video;

        this.setupPlaybackDisplay();
        this.addVideoPlayHandler(video);
        this.addTapHandler(videoContainer);
        this.addKeyHandlers(video);
        this.centerPlayButton(videoContainer);
        this.updatePlaybackRate(this._playbackRate);
    }

    start(): void {
        if (!PageUtil.isPageVideo) {
            return;
        }

        const video = document.querySelector(domIdentifiers.videoElementSelector);

        if (video) {
            this.addVideoHooks(video as HTMLVideoElement);
        }

        const videoContainer = document.getElementsByClassName(domIdentifiers.videoCourseLibClass)[0];

        const observer = new MutationObserver(this.onMutation);

        observer.observe(videoContainer, { childList: true, subtree: true });
    }
}