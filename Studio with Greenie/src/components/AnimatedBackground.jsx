import React, { useEffect } from 'react';
import backgroundImage from '../assets/dj-background.jpg';
import './AnimatedBackground.css'; // Import the CSS file

const AnimatedBackground = () => {
    useEffect(() => {
        // Add effects after component mounts
        const background = document.querySelector('.animated-background');

        const animate = () => {
            const scale = 1 + 0.02 * Math.sin(Date.now() / 2000);
            const opacity = 0.4 + 0.015 * Math.sin(Date.now() / 3000);

            if (background) {
                background.style.transform = `scale(${scale})`;
                background.style.opacity = opacity;
            }

            requestAnimationFrame(animate);
        };

        // Start animation
        const animationId = requestAnimationFrame(animate);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="background-container">
            <div
                className="animated-background"
                style={{ backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center -90%',
                opacity: 0.6
            }}
            /> 
        </div>
    );
};

export default AnimatedBackground;