export default class Debounce {
    static debounceMethod(minTimeBetweenInMs: number, callback: Function) {
        let lastRunTime = 0;

        return (...args: any[]) => {
            const now = Date.now();
            const delta = now - lastRunTime;

            if (delta < minTimeBetweenInMs) {
                return;
            }

            callback(...args);
            lastRunTime = now;
        }
    }
}