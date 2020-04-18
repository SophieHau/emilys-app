import React from 'react';

const Message = ({ message }) => {
    return (
        <div>
            <p>{ message.id }</p>
            <p>{ message.text }</p>
            <p>{ message.time }</p>
            <p>{message.username }</p>
        </div>
    );
};

export default Message;