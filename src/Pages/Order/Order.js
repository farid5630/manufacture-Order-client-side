import React from 'react';
import { useParams } from 'react-router-dom';

const Order = () => {
    const id = useParams();
    
    return (
        <div>
            <h1>This is Order Now</h1>
        </div>
    );
};

export default Order;