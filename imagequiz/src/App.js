import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
