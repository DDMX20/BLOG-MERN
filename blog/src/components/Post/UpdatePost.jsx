import React,{useState} from "react";
import Form from "../Form/BlogForm"
import Read from "../Read"
function UpdatePost(props){

      const [post,set]=useState({title:"",tags:"",html:""})

    return (<div>
      <Read id = {props.match.params.id} data={set}/>
          <Form  id={props.match.params.id} title = {post.title} tags= {post.tags} html={post.html} update={true}/>

          </div>)
        };

export default UpdatePost;
