import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found flex flex-col items-center justify-center'>
            <h2 className='uppercase '>page not found</h2>
            <h1 className='text-9xl text-red-400 font-bold'>404</h1>
            <Link to="/" className='text-2xl underline text-primary'>Go Home</Link>
            
        </div>
    );
};

export default NotFound;