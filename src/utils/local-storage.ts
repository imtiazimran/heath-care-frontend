export const setToLocalStorage = (key: string, value: any) => {
    console.log({key, value});
    if(!key || typeof window === 'undefined') return "";

    return localStorage.setItem(key, JSON.stringify(value))
}