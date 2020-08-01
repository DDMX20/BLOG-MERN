import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import RenderDate from "./renderDate.jsx"
import RenderTag from "./renderTag.jsx"
import "../../css/home.css"
import "../../css/post.css"


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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return(<div>
    <div className="home"><Link to ="/"><li>HOME</li></Link></div>
    <div className="container">
    {blog.map(post => (
      <Link to = {"/posts/" + post._id}>
      <button className="posts" key = {post._id}>
            <h1 className="title">{post.title}</h1>
            <span>{RenderDate( post.createdAt)} </span>
            <div>{RenderTag(post.tags)}</div>

        </button>
        </Link> ))}

    </div>

    </div>

  )}

  export default PostLists
