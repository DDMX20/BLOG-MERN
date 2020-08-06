import React,{useState} from "react";
import UpdateBlog from "../Post/UpdateBlog"

function Button(props){
  const [isClicked1,set]=useState(false)

  function handleClick1(event) {
      set(true)
      event.preventDefault()
  }





    return  <div>
    <button type= "submit" onClick={handleClick1}>{props.text}</button>
    {isClicked1?<UpdateBlog data={props.data} id={props.id} />:console.log("not Posted")}
</div>
        };

export default Button;
