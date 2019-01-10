import domIdentifiers from '../../config/domIdentifiers';
import TapEventListener from '../../event/TapEventListener';
import ClassUtil from '../../util/ClassUtil';
import PageUtil from '../../util/PageUtil';
import Module from '../Module';

export default class VideoModule extends Module {
    private static _secondsToScrub: number = 5;
    private static _playbackRateChange: number = 0.125;
    private _video?: HTMLVideoElement;
    private _videoContainer?: HTMLDivElement;
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
    }

    private addVideoHooks(video: HTMLVideoElement) {
        const videoContainer = document.getElementById(domIdentifiers.videoContainerId);

        if (!videoContainer) {
            return;
        }

        this._videoContainer = videoContainer as HTMLDivElement;
        this._video = video;

        const videoContentDiv = document.getElementsByClassName(domIdentifiers.videoClass)[0];

        if (videoContentDiv) {
            this._playbackDisplay = document.createElement('div');
            this.updatePlaybackRate(this._video.playbackRate);
            videoContentDiv.insertAdjacentElement('afterend', this._playbackDisplay);
        }

        const tapListener = new TapEventListener(this._videoContainer, this.onTap);
        tapListener.listen();

        videoContainer.addEventListener('keydown',  (e: KeyboardEvent) => {
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
                this.updatePlaybackRate(Math.max(video.playbackRate - VideoModule._playbackRateChange, 0));
                e.preventDefault();
                return;
            }

            if (['+', '='].includes(e.key)) {
                this.updatePlaybackRate(video.playbackRate + VideoModule._playbackRateChange);
                e.preventDefault();
                return;
            }

            if (['0'].includes(e.key)) {
                this.updatePlaybackRate(1.0);
                e.preventDefault();
                return;
            }

            if ([' ', 'Space'].includes(e.key)) {
                this.onTap();
                e.preventDefault();
                return;
            }
        });
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

        const observer = new MutationObserver(this.onMutation.bind(this));

        observer.observe(videoContainer, { childList: true, subtree: true });
    }
}