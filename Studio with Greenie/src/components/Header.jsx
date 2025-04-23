
import React, { useEffect, useRef, useState } from 'react';
import '../components/Header.css'
import logo from '../assets/logo.png';
import remixedLogo from '../assets/remixed-logo.png'
import backgroundAudio from '../assets/website audio.mp3'

function Header() {
    const audioRef = useRef(null);
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [audioInitialized, setAudioInitialized] = useState(false);

    // Separate autoplay attempt - only runs once
    useEffect(() => {
        const audioElement = audioRef.current;
        
        // Try autoplay first
        const attemptAutoplay = async () => {
            try {
                await audioElement.play();
                setAudioPlaying(true);
                setAudioInitialized(true);
                console.log("Autoplay successful");
            } catch (error) {
                console.log("Autoplay prevented. Waiting for interaction");
                // Don't set initialized yet - will happen on first interaction
            }
        };

        attemptAutoplay();
    }, []); // Empty dependency array - only run on mount

    // Handle first interaction separately from toggle
    useEffect(() => {
        if (audioInitialized) {
            return; // Skip if already initialized
        }

        const audioElement = audioRef.current;
        const interactionEvents = ['click', 'touchstart', 'scroll', 'keydown'];

        // Play on first interaction
        const playOnInteraction = () => {
            audioElement.play()
                .then(() => {
                    setAudioPlaying(true);
                    setAudioInitialized(true);
                    console.log("Audio started via interaction");
                    
                    // Remove all event listeners after audio starts
                    interactionEvents.forEach(event => {
                        document.removeEventListener(event, playOnInteraction);  
                    });
                })
                .catch(err => console.log("Still couldn't play audio", err));
        };

        // Add event listeners for interactions
        interactionEvents.forEach(event => {
            document.addEventListener(event, playOnInteraction);
        });

        // Cleanup
        return () => {
            interactionEvents.forEach(event => {
                document.removeEventListener(event, playOnInteraction);
            });
        };
    }, [audioInitialized]); // Only re-run if initialization state changes

    // Simple, direct toggle function
    const toggleAudio = () => {
        const audioElement = audioRef.current;
        
        if (audioElement.paused) {
            // Check actual paused state of element, not just our React state
            audioElement.play()
                .then(() => {
                    setAudioPlaying(true);
                    setAudioInitialized(true);
                    console.log("Audio resumed");
                })
                .catch(err => console.log("Couldn't play audio", err));
        } else {
            audioElement.pause();
            setAudioPlaying(false);
            console.log("Audio paused, paused state:", audioElement.paused);
        }
    };

    return (
        <header className="header">
            <audio
                ref={audioRef}
                src={backgroundAudio}
                loop 
                preload="auto"
            />
            <button 
                onClick={toggleAudio}
                className="audio-button"
            >
                {audioPlaying ? '🔊' : '🔇'}
            </button>
            <div className='studio-text'>BOOK THE STUDIO WITH</div>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo pulse" />
                <img src={remixedLogo} alt="remixed for mos, aatw, bcd and dinky records" className='remixed-logo' />
            </div>
        </header>
    );
}

export default Header;