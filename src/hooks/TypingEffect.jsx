import { useTypewriter } from 'react-simple-typewriter';

const TypingEffect = () => {
    const [typeEffect] = useTypewriter({
        words: ["Full Stack Dev", "Software Engineer", "Coder"],
        loop: {},
        typeSpeed: 100,
        delaySpeed: 30,
    });
    
    return typeEffect;
};

export default TypingEffect;
