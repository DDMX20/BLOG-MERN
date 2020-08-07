import React,{useState} from "react";
import PostBlog from "../Post/PostBlog"
import {Link} from "react-router-dom"
import "../../css/form.css"
import Button from "./Button"
function Form(props) {

      const [isClicked,clicked] = useState(false)
      const [create, update] = useState({title:"",tags:"",html:""})
      const {title,tags,html} = create
         function handleChange(event)
     {
      const {name,value}= event.target
      update((prev)=>{return {...prev,[name]:value}})

     }
      function handleClick(event)
      {
        clicked(true)
        event.preventDefault()
      }
return <div>
          <div className="home">
          <Link to = "/posts"> <li id="a">POSTS</li>  </Link>
          <Link to ="/"><li id="a">HOME</li></Link>
          </div>
          <div className="post1">
          <div className="form">
          <form >

                <input  className="text" onChange ={handleChange}  type="text" name="title" value= {title} placeholder="TITLE"/><br/>

                <textarea className="textArea"   onChange ={handleChange}  name="html" value={html}/><br/>

                <input className="text"  onChange ={handleChange}  type="text" name="tags" value={tags.split(" ")}placeholder="#TAGNME"/><br/>

                    {isClicked ?<PostBlog data={isClicked?create:console.log("err")} />:null}
                    {props.update?<Button text="UPDATE" data={create} id={props.id} />:<button  type="Submit" onClick={handleClick} name="html">POST</button>}


            </form>
            </div>
            </div>

       </div>
}


export default Form
