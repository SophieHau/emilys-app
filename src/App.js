import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import Homepage from './pages/homepage.component';
import SignIn from './pages/signin.component';
import Register from './pages/register.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Router>
        <Navigation currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/signin' component={SignIn} />
            <Route path='/register' component={Register} />
          </Switch>
        </Router>
      </div>
    );
  }
} 


export default App;
