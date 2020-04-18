import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import MessageList from './components/message-list/message-list.component';
import ChatInput from './components/chat-input/chat-input.component';


class App extends React.Component {
  constructor() {
    super();

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
      input: ''
    }
  }

  onInputChange = (event) => {
    return this.setState({input: event.target.value})
  }

  onSubmitMessage = () => {
    const { messages } = this.state;
    messages.push({
      id: '2',
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
      <div className="App">
        <Navigation />
        <MessageList messages={messages}/>
        <ChatInput 
          onInputChange={this.onInputChange} 
          onSubmitMessage={this.onSubmitMessage} 
          onEnterKeyPress={this.onEnterKeyPress}
          input={input}
        />
      </div>
    );
  };
}

export default App;
