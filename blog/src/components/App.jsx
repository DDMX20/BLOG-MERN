  import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Posts from "./Post/Posts.jsx"
import PostLists from "./Post/PostLists"
import Home from "./Home"
import Form from "./BlogForm"
import PostBlog from "./Post/PostBlog"
import DeletePost from "./Post/DeletePost"
import Footer from "./Footer"
import "../css/home.css"
function App() {
  return (<div className="Page">
          <Router>
            <Switch>
                <Route path ="/" exact component={Home}/>
                <Route path ="/posts/:id" component={Posts}/>
                <Route path ="/:id/delete" component={DeletePost}/>
                <Route path ="/posts" component={PostLists}/>
                <Route path ="/Form" component={Form}/>
                <Route path ="/newposts" component={PostBlog}/>
            </Switch>
          </Router>
          <Footer/>
          </div>
          );

          }

export default App
