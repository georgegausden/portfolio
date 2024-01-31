'use client'

import { useState, useEffect } from 'react';

function TypingText({ text, speed }: { text: string, speed: number }) {
    const [output, setOutput] = useState('');
    const [words, setWords] = useState(initialBankOfWords);
    let index = 0;
    let deleting = false;

    useEffect(() => {
        const interval = setInterval(() => {
            if (!deleting && index < text.length) {
                setOutput((prevOutput) => prevOutput + text.charAt(index));
                index++;
            } else if (!deleting && index >= text.length) {
                deleting = true;
                index--;
            } else if (deleting && text.charAt(index) === ' ') {
                deleting = false;
                if (words.length === 0) {
                    setWords(initialBankOfWords);
                }
                setOutput((prevOutput) => prevOutput + words[0]);
                setWords((prevWords) => prevWords.slice(1));
            } else if (deleting) {
                setOutput((prevOutput) => prevOutput.slice(0, -1));
                index--;
            } else {
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed, words, initialBankOfWords]);

    return <p>{output}</p>;
}

const initialBankOfWords = [
    'ideas',
    'experiments',
    'designs',
];




function p5Experiments(){
    return(
        <div>
            <h1>p5 experiments</h1>

            <TypingText text={`From time to time, I like to experiment with p5... Here are some of my ${initialBankOfWords[0]}.`} speed={100} />

            <iframe src="https://editor.p5js.org/georgegausden/full/i_k7ko-wa" className="w-full h-[100em] scale-[25%]"></iframe>
        </div>
    )

}




export default p5Experiments;
