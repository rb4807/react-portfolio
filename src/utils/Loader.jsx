import React from 'react'

const Loader = () => {
    return (
        <div className="bg-baseLight dark:bg-baseDark flex items-center justify-center min-h-screen">
        <div className="head bg-transparent text-white text-6xl animate-pulse">
            <span className="shadow-glow">RAJ</span><span className='text-baseColor shadow-glow'>ESH</span>
        </div>
    </div>  
    )
}

export default Loader

// Add this to your CSS or Tailwind config
const styles = `
@keyframes glow {
  0%, 100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
                 0 0 20px rgba(255, 255, 255, 0.8),
                 0 0 30px rgba(255, 255, 255, 0.8);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 1),
                 0 0 30px rgba(255, 255, 255, 1),
                 0 0 40px rgba(255, 255, 255, 1);
  }
}

.shadow-glow {
  animation: glow 2s ease-in-out infinite;
}
`;