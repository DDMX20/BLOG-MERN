import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Posts from "./Post/Posts.jsx"
import PostLists from "./Post/PostLists"
import Home from "./Home"
import Form from "./Form"
import PostBlog from "./Post/PostBlog"

function App() {
  return ( <Router>
    <Switch>
    <Route path ="/" exact component={Home}/>
    <Route path ="/posts/:id" component={Posts}/>
  <Route path ="/posts" component={PostLists}/>
  <Route path ="/Form" component={Form}/>
  <Route path ="/newposts" component={PostBlog}/>
</Switch>
  </Router>
);
}

export default App
