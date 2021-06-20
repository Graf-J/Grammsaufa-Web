import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './components/mainPage/MainPage';
import AddUsersPage from './components/addUsersPage/AddUsersPage';
import InfoPage from './components/infoPage/InfoPage';
import NotFoundPage from './components/notFoundPage/NotFoundPage';

function App() {

  useEffect(() => {
    console.log('Wenn du das hier liest, hast du ab jetzt 1 Minute Zeit dein Bier zu exen 🍺🍺🍺');
  }, [])

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route path='/' exact component={ MainPage } />
            <Route path='/add-users' component={ AddUsersPage } />
            <Route path='/info' exact component={ InfoPage } />
            <Route path='*' component={ NotFoundPage } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
