import React from 'react';

const ToggleButton = ({ onClick, isShowingMore }) => {
    return (
        <button onClick={onClick} className="px-3 py-1.5 text-gray-700 dark:text-slate-300 hover:text-gray-800 dark:hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2  backdrop-blur-sm group relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
                {isShowingMore ? "See Less" : "See More"}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}`}>
                    <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
                </svg>
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-all duration-300 group-hover:w-full"></span>
        </button>
    );
}

export default ToggleButton; 