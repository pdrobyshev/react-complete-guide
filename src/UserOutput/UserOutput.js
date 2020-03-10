import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="paragraphs">
            <p className="paragraphs__item">Hey! That's my first app.</p>
            <p className="paragraphs__item">ENTER THE NAME</p>
            <p className="paragraphs__item">
                The username is:
                <span className="paragraphs__bold">{props.username}</span>
            </p>
        </div>
    );
};

export default userOutput;
