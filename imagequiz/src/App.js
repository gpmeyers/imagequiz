import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
