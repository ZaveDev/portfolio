
import './App.css';
import { NavBar, Home, About, Projects, Contact } from "./components";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    
    <NavBar/>

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
    </div>
  );
}

export default App;
