import { Route, Switch } from "react-router-dom";

import { Home, About, Projects, Contact } from "./components/pages";
import { NavBar } from "./components";
import Modal from "./components/utils/Modal";

import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import youtube from "./assets/youtube.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
