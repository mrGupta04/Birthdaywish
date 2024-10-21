<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 121231e (Update project files for deployment)
import { useSwipeable } from 'react-swipeable';
import Confetti from 'react-confetti';
import './Timeline.css';

const memories = [
<<<<<<< HEAD
    { date: '🌟 Unexpected we meet on Ludo -- 14 April, 2024', image: process.env.PUBLIC_URL + '/images/img14.jpg', message: 'Main tumhe har match me haraya tha, isliye tum bohot jealous hui thi mujhse 😄' },
    { date: '🌟 First Chat on Facebook -- 17 April, 2024', image: process.env.PUBLIC_URL + '/images/img2.jpg', message: 'This was the best day ever in my whole life! I never thought that I will get a person like you in my life ❤️' },
    { date: 'Snapchat pe humlog chatting start kiye the', image: process.env.PUBLIC_URL + '/images/img3.jpg', message: 'Yahi se humlogo ki lovestory chalu hui thi 💕' },
    { date: '22 May, 2024 -- Isi din tum apna mobile number di thi itna request ke baad', image: process.env.PUBLIC_URL + '/images/img4.jpg', message: 'Kitna request ke baad number di thi, aisa laga jaise koi khazana mil gaya ho 💖💖💖💖' },
    { date: '23 June 2024 -- Isi din tum mera proposal accept ki thi', image: process.env.PUBLIC_URL + '/images/img15.jpg', message: 'Pata hai ye din meri life ka sabse best day tha, kyunki proposal accept karke tumne surprise diya tha 💍💖' },
    { date: 'July 2024 -- Humara 1st Date', image: process.env.PUBLIC_URL + '/images/img5.jpg', message: 'Ye din kitna khaas tha, jab hum pehli baar mile the. Kitne sawal the man mein, “Kaisi hogi tum?” 💕' },
    { date: 'Jab hum log mandir me mile the', image: process.env.PUBLIC_URL + '/images/img6.jpg', message: 'Yaad hai, main kaise tumhe pankha jhula raha tha aur sab ladkiyan hansi thi 😄💖' },
    { date: 'Jab pehli baar tumhe ring pehnaya wo bhi auto me', image: process.env.PUBLIC_URL + '/images/img7.jpg', message: 'Wo pal kitna khaas tha, jab maine tumhe ring pehnai 💍💖' },
    { date: '9 October 2024 -- Jab pehli baar tumhe makeup me dekha', image: process.env.PUBLIC_URL + '/images/img10.jpg', message: 'Pata hai, mujhe yakin hi nahi ho raha tha ki ye tum hi ho. Tum us din kitni sundar lag rahi thi 😍💖' },
];

function Timeline() {
    const [showSurprise, setShowSurprise] = useState(false);
    const [activeMemoryIndex, setActiveMemoryIndex] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const firstSong = new Audio(process.env.PUBLIC_URL + '/songs/song1.mp3');
    const birthdaySong = new Audio(process.env.PUBLIC_URL + '/songs/song2.mp3');

    useEffect(() => {
        // Play the first song when surprise is shown
        if (showSurprise) {
            firstSong.play();
        }
        return () => {
            // Cleanup: Stop both songs when the component unmounts
            firstSong.pause();
            firstSong.currentTime = 0;
            birthdaySong.pause();
            birthdaySong.currentTime = 0;
        };
    }, [showSurprise]);

    useEffect(() => {
        // If the last memory is reached, stop the first song and play the birthday song
        if (activeMemoryIndex === memories.length - 1) {
            firstSong.pause();
            birthdaySong.play();
            setShowConfetti(true); // Show confetti on the last memory
        } else {
            // Ensure the birthday song is paused if not on the last memory
            birthdaySong.pause();
            birthdaySong.currentTime = 0;
        }
    }, [activeMemoryIndex]);

    const nextMemory = () => {
        const nextIndex = (activeMemoryIndex + 1) % memories.length;
=======
    {
        date: '🌟 Unexpected we meet on Ludo -- 14 April ,2024',
        image: '/images/img14.jpg',
        message: 'Main tumhe har match me haraya tha, isliye tum bohot jealous hui thi mujhse 😄',
    },
    {
        date: '🌟 First Chat on Facebook -- 17 April ,2024',
        image: '/images/img2.jpg',
        message: 'This was the best day ever in my whole life! I never thought that I will get a person like you in my life ❤️',
    },
    {
        date: 'Snapchat pe humlog chatting start kiye the',
        image: '/images/img3.jpg',
        message: 'Yahi se humlogo ki lovestory chalu hui thi 💕',
    },
    {
        date: '22 May , 2024-- Isi din tum apna mobile number di thi itna request ke baad',
        image: '/images/img4.jpg',
        message: 'Kitna request ke baad number di thi, aisa laga jaise koi khazana mil gaya ho 💖',
    },
    {
        date: '23 June 2024 -- Isi din tum mera proposal accept ki thi',
        image: '/images/img15.jpg',
        message: 'Pata hai ye din meri life ka sabse best day tha, kyunki proposal accept karke tumne surprise diya tha 💍💖',
    },
    {
        date: 'July 2024 -- Humara 1st Date',
        image: '/images/img5.jpg',
        message: 'Ye din kitna khaas tha, jab hum pehli baar mile the. Kitne sawal the man mein, “Kaisi hogi tum?” 💕',
    },
    {
        date: 'Jab hum log mandir me mile the',
        image: '/images/img6.jpg',
        message: 'Yaad hai, main kaise tumhe pankha jhula raha tha aur sab ladkiyan hansi thi 😄💖',
    },
    {
        date: 'Jab pehli baar tumhe ring pehnaya wo bhi auto me',
        image: '/images/img7.jpg',
        message: 'Wo pal kitna khaas tha, jab maine tumhe ring pehnai 💍💖',
    },
    {
        date: '9 October 2024 -- Jab pehli baar tumhe makeup me dekha',
        image: '/images/img10.jpg',
        message: 'Pata hai, mujhe yakin hi nahi ho raha tha ki ye tum hi ho. Tum us din kitni sundar lag rahi thi 😍💖',
    },
];

function Timeline() {
    const [showSurprise, setShowSurprise] = useState(false); // State to toggle between birthday message and timeline
    const [activeMemoryIndex, setActiveMemoryIndex] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

    const nextMemory = () => {
        const nextIndex = (activeMemoryIndex + 1) % memories.length;
        if (nextIndex === memories.length - 1) {
            setShowConfetti(true); // Show confetti on final memory
        }
>>>>>>> 121231e (Update project files for deployment)
        setActiveMemoryIndex(nextIndex);
    };

    const prevMemory = () => {
<<<<<<< HEAD
        const prevIndex = activeMemoryIndex === 0 ? memories.length - 1 : activeMemoryIndex - 1;
=======
        const prevIndex =
            activeMemoryIndex === 0 ? memories.length - 1 : activeMemoryIndex - 1;
>>>>>>> 121231e (Update project files for deployment)
        setActiveMemoryIndex(prevIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextMemory,
        onSwipedRight: prevMemory,
    });

<<<<<<< HEAD
=======
    // Function to show the surprise (timeline)
>>>>>>> 121231e (Update project files for deployment)
    const handleShowSurprise = () => {
        setShowSurprise(true);
    };

    return (
        <div className="timeline-container" {...handlers}>
            {!showSurprise ? (
                <div className="birthday-message">
<<<<<<< HEAD
                    <img src={process.env.PUBLIC_URL + '/images/img11.jpg'} alt="Happy Birthday" className="birthday-image" />
=======
                    <img src="/images/img11.jpg" alt="Happy Birthday" className="birthday-image" />
>>>>>>> 121231e (Update project files for deployment)
                    <h1>Happy Birthday My Baby 🎉🎂💖</h1>
                    <button className="surprise-button" onClick={handleShowSurprise}>
                        Click This for Surprise!
                    </button>
                </div>
            ) : (
<<<<<<< HEAD
                <div className="memory-container">
                    {showConfetti && <Confetti />}
                    {activeMemoryIndex === memories.length - 1 ? ( // Check if it's the last memory
                        <div className="birthday-wish">
                            <h2>🎉🎉🎉💖💖💖💖Happy Birthday! My love 💖💖💖💖🎉🎉🎉</h2>
                            <img
                                src={process.env.PUBLIC_URL + '/images/img12.jpg'} // Path to birthday cake image
                                alt="Birthday Cake"
                                className="birthday-cake"
                            />
                        </div>
                    ) : (
                        <div className="memory-card">
                            <h2>{memories[activeMemoryIndex].date}</h2>
                            <div className="memory-details">
                                <img
                                    src={memories[activeMemoryIndex].image}
                                    alt="memory"
                                    className="memory-image"
                                />
                                <p>{memories[activeMemoryIndex].message}</p>
                            </div>
                        </div>
                    )}
=======
                <div>
                    {showConfetti && <Confetti />}
                    <div className="memory-card">
                        <h2>{memories[activeMemoryIndex].date}</h2>
                        <div className="memory-details">
                            <img
                                src={memories[activeMemoryIndex].image}
                                alt="memory"
                                className="memory-image"
                            />
                            <p>{memories[activeMemoryIndex].message}</p>
                        </div>
                    </div>
>>>>>>> 121231e (Update project files for deployment)
                    <div className="buttons">
                        <button onClick={prevMemory}>◀ Previous</button>
                        <button onClick={nextMemory}>Next ▶</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Timeline;
