import { writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined';
const initialTheme: string = isBrowser ? localStorage.getItem('theme') || 'business' : 'business';

export const theme = writable<string>(initialTheme);

if (isBrowser) {
  theme.subscribe((value: string) => {
    localStorage.setItem('theme', value);
    document.documentElement.setAttribute('data-theme', value);
  });
}