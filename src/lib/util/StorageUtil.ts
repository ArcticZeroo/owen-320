import localStorageIdentifiers from '../config/localStorageIdentifiers';
export default class StorageUtil {
    private static getLocalStorageKey(suffix: string): string {
        return localStorageIdentifiers.prefix + suffix;
    }

    static setItem(key: string, value: any) {
        window.localStorage.setItem(StorageUtil.getLocalStorageKey(key), value);
    }

    static getItem(key: string): string | null {
        return window.localStorage.getItem(StorageUtil.getLocalStorageKey(key));
    }
}