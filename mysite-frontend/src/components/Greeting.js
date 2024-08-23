import React, { useState, useEffect } from 'react';

function Greeting() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/api/greeting/')
            .then(response => response.json())
            .then(data => setMessage(data.message));
    }, []);

    return <h1>{message}</h1>;
}

export default Greeting;
