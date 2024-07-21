import { useState, useEffect } from 'react';

const FloatNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        let timeout;
        const handleScroll = () => {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const isScrollingUpNow = currentScrollTop < lastScrollTop;
                setIsScrollingUp(isScrollingUpNow);
                setIsScrolled(currentScrollTop > 0);
                setLastScrollTop(currentScrollTop);
            }, 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    return { isScrolled, isScrollingUp };
};

export default FloatNavbar;
