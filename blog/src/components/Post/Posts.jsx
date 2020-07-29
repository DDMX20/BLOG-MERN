import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"



function Posts(props) {

const [post,update]= useState({})
useEffect(()=>{
    fetchItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
const fetchItems= async() =>{
    const data = await fetch("http://localhost:5000/posts/"+props.match.params.id)
    const set = await data.json();
  update(set);
}
function renderHtml(){
    return {__html:post.html}
  }
function renderPost(){
    return <div dangerouslySetInnerHTML={renderHtml()}></div>;
  }



return <div>

   {renderPost()}



  <Link to = "/posts">  POSTS  </Link>
<Link to ="/">HOME</Link>
</div>}



export default Posts
