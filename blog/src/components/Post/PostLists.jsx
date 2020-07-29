import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import renderDate from "./renderDate.jsx"
import renderTag from "./renderTag.jsx"

function PostLists() {
  const [blog,update] = useState([])
    useEffect(()=>{
        fetchItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const fetchItems = async()=> {
      const data = await fetch("http://localhost:5000/posts/")
      const set = await data.json();
    update(set);
    }
  return(<div> <div>
    {blog.map(post => (
      <Link to = {"/posts/" + post._id}>
      <button key = {post._id}>
            <h1>{post.title}</h1>
            <span>{renderDate( post.createdAt)} </span>
            <div>{renderTag(post.tags)}</div>
        </button>
        </Link> ))}

    </div>
    <div><Link to ="/">HOME</Link></div></div>

  )}

  export default PostLists
