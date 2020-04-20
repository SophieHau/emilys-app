import React from 'react';
import uuidv1 from 'uuid/v1';
import ChatInput from '../components/chat-input/chat-input.component';
import MessageList from '../components/message-list/message-list.component';


class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                {
                id: '1',
                text: 'Hello',
                time: '15:58',
                username: 'Sophie'
                },
                {
                  id: '3',
                  text: 'Salut',
                  time: '17:48',
                  username: 'Sophie'
                  },
              ],
            input: '',
        }
    }

    onInputChange = (event) => {
        return this.setState({input: event.target.value})
    }
    
    onSubmitMessage = () => {
        const { messages } = this.state;
        messages.push({
            id: uuidv1(),
            text: this.state.input,
            time: '16:34',
            username: 'Tal'
        })
        return this.setState({messages: messages, input: ''})
    }

    onEnterKeyPress = (event) => {
        if (event.which === 13) {
            event.preventDefault();
            this.onSubmitMessage();
        }
    }

    render() {
        const { messages, input } = this.state;
        return (
            <div>
                <MessageList messages={messages}/>
                <ChatInput 
                    input={input}
                    onInputChange={this.onInputChange}
                    onEnterKeyPress={this.onEnterKeyPress}
                    onSubmitMessage={this.onSubmitMessage}
                />
            </div>
        );
    };
}




export default Homepage;