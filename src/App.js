import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './components/mainPage/MainPage';
import AddUsersPage from './components/addUsersPage/AddUsersPage';
import InfoPage from './components/infoPage/InfoPage';
import NotFoundPage from './components/notFoundPage/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route path='/' exact component={ MainPage } />
            <Route path='/add-users' component={ AddUsersPage } />
            <Route path='/info/:user' component={ InfoPage } />
            <Route path='*' component={ NotFoundPage } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
