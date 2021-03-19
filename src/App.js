import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from './Form';

import Output from './Output'

import '../node_modules/react-vis/dist/style.css';
import './css/App.css';
function App() {

  return (
    <Router>
      <Switch>
        <Route path="/output">
          <Output/>
        </Route>
        <Route path='/'>
          <Form />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
