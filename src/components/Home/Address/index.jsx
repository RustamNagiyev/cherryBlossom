import React, { useState, useRef, useEffect } from 'react';
import "./index.css";

export default function Address() {
    const [showMap, setShowMap] = useState(false);
    const locationBoxRef = useRef(null);

    const handleClickOutside = (event) => {
        if (locationBoxRef.current && !locationBoxRef.current.contains(event.target)) {
            setShowMap(false);
        }
    };

    useEffect(() => {
        if (showMap) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showMap]);

    const handleLocationBoxClick = () => {
        setShowMap(!showMap);
    };

    return (
        <div className='address'>
            <div className='main'>
                <div 
                    className='location-box'
                    onClick={handleLocationBoxClick}
                    ref={locationBoxRef}
                >
                    <div className='location-area'>
                        <img
                            className='location-icon-back'
                            src={require('../../../images/back-global.svg').default}
                            alt="location-icon"
                        />
                        <img
                            className='location-icon'
                            src={require('../../../images/loc-icon.svg').default}
                            alt="location-icon"
                        />
                    </div>
                    <h3>Сherry Blossom Address</h3>
                    <p>6201 Hollywood blvd</p>
                    <p>Los Angeles, California 90028</p>
                    <p>Monday - Friday 9:00 am - 8:00 pm</p>
                    <p>Saturday 10:00 am - 5:00 pm</p>
                    <p>Sunday 10:00 am - 5:00 pm</p>
                    {showMap && (
                    <iframe
                        title="Cherry Blossom Address Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.7028349334996!2d-118.32465579999999!3d34.1027524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf55eb7eb3a3%3A0x73e0a161a4399751!2s6201%20Hollywood%20Blvd%2C%20Los%20Angeles%2C%20CA%2090028%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2saz!4v1716309768165!5m2!1str!2saz"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                )}
                </div>
               
            </div>
        </div>
    );
}
