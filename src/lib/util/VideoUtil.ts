export default abstract class VideoUtil {
    static isPlaying(video: HTMLVideoElement): boolean {
        return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
    }
}