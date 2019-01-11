export default abstract class DomUtil {
    static cloneCanvas(original: HTMLCanvasElement, destination: HTMLCanvasElement): void {
        const context = destination.getContext('2d');

        if (!context) {
            return;
        }

        destination.width = original.width;
        destination.height = original.height;

        context.drawImage(original, 0, 0);
    }
}