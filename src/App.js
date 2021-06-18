import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './components/mainPage/MainPage';
import AddUsersPage from './components/addUsersPage/AddUsersPage';
import InfoPage from './components/infoPage/InfoPage';
import UserInfoPage from './components/userInfoPage/UserInfoPage';
import NotFoundPage from './components/notFoundPage/NotFoundPage';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    // Increase User.ID depending on the ID of the last User in the List
    if (users.length !== 0) {
      user.id = users[users.length - 1].id + 1;
    }
    setUsers(prevUsers => [...prevUsers, user]);
  }

  const removeUser = (user) => {
    setUsers(users.filter(curUser => user.id !== curUser.id))
  }

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route path='/' exact component={ () => <MainPage users={ users } /> } />
            <Route path='/add-users' component={ () => <AddUsersPage users={ users } addUser={ addUser } removeUser={ removeUser } /> } />
            <Route path='/info' exact component={ InfoPage } />
            <Route path='/info/:user' component={ UserInfoPage } />
            <Route path='*' component={ NotFoundPage } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
