export enum STORAGE_KEYS {
    genre = 'genre'
}

export const setStorageValue = (key: STORAGE_KEYS, value: string) => value && localStorage.setItem(STORAGE_KEYS[key], value)