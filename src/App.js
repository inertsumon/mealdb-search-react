// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Details from './components/Details/Details';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
<Meals></Meals>
          </Route>
          <Route  path="/home">
<Meals></Meals>
          </Route>
          <Route path="/about">
<About></About>
          </Route>
          <Route path="/details">
<Details></Details>
          </Route>
          <Route path="*">
<NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
