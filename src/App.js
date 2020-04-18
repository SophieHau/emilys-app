import React from 'react';
import uuidv1 from 'uuid/v1';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import MessageList from './components/message-list/message-list.component';
import ChatInput from './components/chat-input/chat-input.component';
import SignIn from './components/signin/signin.component';
import Register from './components/register/register.component';


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
      input: '',
      isSignedin: false,
      user: {
        id: '',
        name: '',
        email: '',
        joined: '',
        img: ''
      },
      route: 'signin'
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

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { messages, input, isSignedIn, route} = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {route === 'home'
          ? <div>
              <MessageList messages={messages}/>
              <ChatInput 
                onInputChange={this.onInputChange} 
                onSubmitMessage={this.onSubmitMessage} 
                onEnterKeyPress={this.onEnterKeyPress}
                input={input}
              />
            </div>
          : (
            route === 'register'
            ? <Register onRouteChange={this.onRouteChange} />
            : <SignIn onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  };
};

export default App;
