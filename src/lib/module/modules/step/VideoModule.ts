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
    private _video?: HTMLVideoElement;
    private _videoContainer?: HTMLElement;
    private _playbackDisplay?: HTMLElement;

    constructor() {
        super();

        ClassUtil.autoBind(this);
    }

    private onMutation(mutations: MutationRecord[], observer: MutationObserver): void {
       for (const mutation of mutations) {
           if (!(mutation.target instanceof Element)) {
               continue;
           }

           if (mutation.target.id === domIdentifiers.videoId) {
               this.addVideoHooks(mutation.target as HTMLVideoElement);
               observer.disconnect();
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
        if (!this._video || !this._playbackDisplay) {
            return;
        }

        this._video.playbackRate = newPlaybackRate;
        this._playbackDisplay.innerText = `Playback Speed: ${newPlaybackRate}`;
        StorageUtil.setItem(localStorageIdentifiers.videoPlaybackSpeed, newPlaybackRate);
    }

    private addKeyHandlers(video: HTMLVideoElement) {
        window.addEventListener('keydown',  (e: KeyboardEvent) => {
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
                this.updatePlaybackRate(Math.max(video.playbackRate - VideoModule._playbackRateIncrementInSeconds, 0));
                e.preventDefault();
                return;
            }

            if (['+', '='].includes(e.key)) {
                this.updatePlaybackRate(video.playbackRate + VideoModule._playbackRateIncrementInSeconds);
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
        });
    }

    private addTapHandler(videoContainer: HTMLElement) {
        const tapListener = new TapEventListener(videoContainer, this.onTap);
        tapListener.listen();
    }

    private setupPlaybackDisplay(video: HTMLVideoElement) {
        const videoContentDiv = document.getElementsByClassName(domIdentifiers.videoClass)[0];

        if (videoContentDiv) {
            this._playbackDisplay = document.createElement('div');
            this.updatePlaybackRate(video.playbackRate);
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

    private setInitialSpeedFromStorage(video: HTMLVideoElement) {
        const storedPlaybackSpeedString = StorageUtil.getItem(localStorageIdentifiers.videoPlaybackSpeed);

        if (!storedPlaybackSpeedString) {
            return;
        }

        const storedPlaybackSpeedValue = Number.parseFloat(storedPlaybackSpeedString);

        if (Number.isNaN(storedPlaybackSpeedValue)) {
            return;
        }

        video.playbackRate = storedPlaybackSpeedValue;
    }

    private addVideoHooks(video: HTMLVideoElement) {
        const videoContainer = document.getElementById(domIdentifiers.videoContainerId);

        if (!videoContainer) {
            return;
        }

        this._videoContainer = videoContainer;
        this._video = video;

        this.setInitialSpeedFromStorage(video);
        this.setupPlaybackDisplay(video);
        this.addTapHandler(videoContainer);
        this.addKeyHandlers(video);
        this.centerPlayButton(videoContainer);
    }

    start(): void {
        if (!PageUtil.isPageVideo) {
            return;
        }

        const video = document.getElementById(domIdentifiers.videoId);

        if (video) {
            this.addVideoHooks(video as HTMLVideoElement);
            return;
        }

        const videoContainer = document.getElementsByClassName(domIdentifiers.videoClass)[0];

        const observer = new MutationObserver(this.onMutation);

        observer.observe(videoContainer, { childList: true, subtree: true });
    }
}