import logo from './logo.svg';
import { HashRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import LogIn from './pages/logIn'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact="/" >
            <LogIn />
          </Route>
          <Route exact="/dashboard" >
            <h1>dashboard</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
