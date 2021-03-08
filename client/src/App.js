import './App.css';
import './css-reset.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Landing from './containers/landing/Landing';
import Collection from './components/collection/Collection'


function App() {

  // TODO : LIFT ALL STATES IN APP

  return (
        <Switch>
          <Route path="/collection">
            <Collection />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
  );
}

export default App
