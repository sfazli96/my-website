import React, { useEffect, useState } from 'react';

const About = () => {
    const [info, setInfo] = useState('');
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetch('/api/about/')
            .then(response => response.json())
            .then(data => {
                setInfo(data.info);
                setQuote(data.inspiration);
            });
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>About This Site</h2>
            <p>{info}</p>
            <blockquote style={{ fontStyle: 'italic', marginTop: '20px' }}>
                "{quote}"
            </blockquote>
            <p>Get inspired and build something amazing!</p>
        </div>
    );
};

export default About;
