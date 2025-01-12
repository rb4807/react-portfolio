import React from 'react';

const HamburgerNavbar = ({ isMenuOpen, toggleMenu, theme }) => {
    return (
        <div
            className={`fixed inset-0 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-30 
                ${theme === 'dark' ? 'bg-black bg-opacity-30 backdrop-blur-md' : 'bg-white bg-opacity-30 backdrop-blur-md'}`
            }
        >
            <div className="flex flex-col h-full">
                <button onClick={toggleMenu} className="p-4 text-gray-800 dark:text-white text-2xl self-end">✕</button>
                <div className="px-6 pt-4 pb-6 space-y-4 flex-grow overflow-y-auto">
                    {
                        [
                            { text: 'About Me', href: '#journey' },
                            { text: 'Services', href: '#about' },
                            { text: 'Journey', href: '#services' },
                            { text: 'Contact Me', href: '#social' },
                        ].map((item) => (
                            <a key={item.text} href={item.href} onClick={() => { toggleMenu(); }} className="text-gray-800 dark:text-white hover:bg-gray-700 hover:text-white block px-4 py-2 rounded-md text-base font-medium">
                                {item.text}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default HamburgerNavbar;
