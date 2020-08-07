import React,{useState} from "react"
import {Link} from "react-router-dom"
import "../../css/form.css"
import Read from "../Read"

function Posts(props) {
  const [post,set]=useState({title:"",tags:"",html:""})

function renderHtml(){
    return {
      __html:post.html
    }
  }
function renderPost(){
    return <div dangerouslySetInnerHTML={renderHtml()}></div>;
  }

  return <div >
          <Read id = {props.match.params.id} data={set}/>
          <div className="home">
          <Link to = "/posts"> <li id="a">POSTS</li>  </Link>
          <Link to ="/"><li id="a">HOME</li></Link>
          </div>
          <div className="post" >
          <h1 className="title">{post.title}</h1>
          <div className="container">
          {renderPost()}
          <Link  to = {"/update/"+props.match.params.id}><button>EDIT</button></Link>
          <Link to = {"/delete/"+props.match.params.id}><button>delete</button></Link>
          </div>
          </div>
      </div>}

export default Posts
