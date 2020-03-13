import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [storage, setStorage] = useLocalStorage('darkMode');

    useEffect(() => {
        storage === true ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [storage]);

    return [storage, setStorage];
}