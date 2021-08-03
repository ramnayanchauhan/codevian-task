
import './App.css';
import Screen from './Component/Screen1';
import Screen2 from './Component/Screen2';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact  component={Screen} />
          <Route path="/screen2" exact component={Screen2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
