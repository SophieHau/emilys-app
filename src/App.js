import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import Homepage from './pages/homepage.component';
import SignIn from './pages/signin.component';
import Register from './pages/register.component';



const App = () => {
  return (
    <div className="App">
      <Router>
      <Navigation />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/signin' component={SignIn} />
          <Route path='/register' component={Register} />
        </Switch>
      </Router>
    </div>
  );
};


export default App;
