import React from 'react';

const ChatInput = ({ onInputChange, onSubmitMessage }) => {
    return (
        <div>
            <input type="text" onChange={onInputChange}/>
            <input type="submit" onClick={onSubmitMessage}/>
        </div>
    )
}

export default ChatInput;