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
import Quiz from './components/Quiz';

import flowers from './flowers';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        {flowers.map((flower) => (
          <Route 
            path={"/" + flower.name}
            render={() => (
              <Quiz name={flower.name} isAuthed={true} />
            )}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
