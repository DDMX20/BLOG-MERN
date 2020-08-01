import React,{useState,useEffect} from "react"
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
    return {
      __html:post.html
    }
  }
function renderPost(){
    return <div dangerouslySetInnerHTML={renderHtml()}></div>;
  }
  function handleClick() {
    alert("ARE YOU SURE YOU WANT TO DELETE THE POST WITH TITLE : " +post.title)

  }

return <div >
          <div className="home">
          <Link to = "/posts"> <li id="a">POSTS</li>  </Link>
          <Link to ="/"><li id="a">HOME</li></Link>
          </div>
          <div className="post" >
          <h1 className="title">{post.title}</h1>
          <div className="container">
          {renderPost()}
          <Link to = {"/"+props.match.params.id+"/update"}><button>Edit</button></Link>
          <Link to = {"/"+props.match.params.id+"/delete"}><button onClick={handleClick}>delete</button></Link>
          </div>
          </div>


      </div>}



export default Posts
