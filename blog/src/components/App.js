import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Posts from "./Posts"
import Home from "./Home"

function App() {
  return ( <Router>
    <Switch>
    <Route path ="/" exact component={Home}/>
  <Route path ="/posts" component={Posts}/>
</Switch>
  </Router>
);
}

export default App
