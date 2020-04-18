import React from 'react';

const ChatInput = ({ onInputChange, onSubmitMessage, onEnterKeyPress, input }) => {
    return (
        <div>
            <input type="text" onChange={onInputChange} onKeyPress={onEnterKeyPress} value={input}/>
            <input type="submit" onClick={onSubmitMessage} />
        </div>
    )
}

export default ChatInput;