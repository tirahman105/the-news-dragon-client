import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae consequatur nisi reiciendis animi earum quibusdam assumenda est magnam numquam?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;