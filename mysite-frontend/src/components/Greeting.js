import React, { useEffect, useState } from 'react';

const Greeting = () => {
    const [message, setMessage] = useState('');
    const [funFact, setFunFact] = useState('');

    useEffect(() => {
        fetch('/api/greeting/')
            .then(response => response.json())
            .then(data => {
                setMessage(data.message);
                setFunFact(data.fun_fact);
            });
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>{message}</h1>
            <p>🌟 Fun Fact: {funFact}</p>
            <p>Enjoy your stay and discover more interesting facts!</p>
        </div>
    );
};

export default Greeting;
