import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
function Posts() {


const [blog,update] = useState([])
  useEffect(()=>{
      fetchItems()
  },[])

  const fetchItems = async()=> {
    const data = await fetch("http://localhost:5000/posts/")
    const set = await data.json();
  update(set);
  }


  return(<div>
    {blog.map(post => (
        <p>{post.title}</p>
      ))}
      <h1>POSTS</h1>
    <Link to = "/">
    <li>Home</li>
    </Link>
    </div>)
}

export default Posts
