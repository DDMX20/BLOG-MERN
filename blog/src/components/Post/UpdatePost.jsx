import React,{useEffect,useState} from "react";
import Form from "../Form/BlogForm"

function UpdatePost(props){
  


    return (
          <Form  id={props.match.params.id}/>
          )
        };

export default UpdatePost;
