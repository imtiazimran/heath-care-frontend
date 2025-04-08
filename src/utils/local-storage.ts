export const setToLocalStorage = (key: string, value: any) => {
    if(!key || typeof window === 'undefined') return "";

    return localStorage.setItem(key, value)
}

export const getFromLocalStorage = (key: string) => {
    if(!key || typeof window === 'undefined') return null;

    const value = localStorage.getItem(key);
    return value;
}

export const removeFromLocalStorage = (key: string) => {
    if(!key || typeof window === 'undefined') return null;

    localStorage.removeItem(key);
}