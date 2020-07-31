import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import renderDate from "./renderDate.jsx"
import renderTag from "./renderTag.jsx"
import "../../css/postlist.css"
import "../../css/home.css"


function PostLists() {


  const [blog,update] = useState([])
    useEffect(()=>{
        fetchItems()
    },[])
    const fetchItems = async()=> {
      const data = await fetch("http://localhost:5000/posts/")
      const set = await data.json();
    update(set);
    }

    /////////////////////////////////////////////////////////////////////////////

  return(<div>
    <div className="home"><Link to ="/"><li>HOME</li></Link></div>
    <div className="container">
    {blog.map(post => (
      <Link to = {"/posts/" + post._id}>
      <button className="posts" key = {post._id}>
            <h1>{post.title}</h1>
            <span>{renderDate( post.createdAt)} </span>
            <div>{renderTag(post.tags)}</div>
        </button>
        </Link> ))}

    </div>
    </div>

  )}

  export default PostLists
