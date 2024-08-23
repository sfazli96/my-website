import React, { useState, useEffect } from 'react';

function About() {
    const [info, setInfo] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/api/about/')
            .then(response => response.json())
            .then(data => setInfo(data.info));
    }, []);

    return <p>{info}</p>;
}

export default About;
