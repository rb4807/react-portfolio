import { THEME_TYPES } from '../constants';

export const applyThemePreference = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
};

export const getThemeIcon = (theme) => {
    return theme === THEME_TYPES.THEME_LIGHT ? lightIcon : darkIcon;
};

const lightIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="hover:scale-115 duration-1000 transform icon icon-tabler icon-tabler-moon-stars" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
        <path d="M19 11h2m-1 -1v2" />
    </svg>
);

const darkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="hover:scale-115 duration-1000 transform icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
);
