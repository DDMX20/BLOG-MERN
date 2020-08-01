import React,{useState} from "react";
import PostBlog from "./Post/PostBlog"
import {Link} from "react-router-dom"
import "../css/form.css"
function Form() {
      const [isClicked,clicked] = useState(false)
      const [create, update] = useState({title:"",tags:"",html:""})
      var {title,tags,html} = create

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
          <form action="/newposts">
                <lable for="title">TITLE :</lable><br/>
                <input  className="text" onChange ={handleChange} type="text" name="title" value={title} placeholder="TITLE"/><br/>
                <lable for="html">Content:</lable><br/>
                <textarea className="text" rows="100" cols="90" onChange ={handleChange}  name="html" value={html}/><br/>
                <lable for="tags">Tags :</lable><br/>
                <input className="text"  onChange ={handleChange} type="text" name="tags" value={tags.split(" ")}placeholder="#TAGNME"/><br/>

                <button onClick={handleClick} type="Submit" name="html">Submit</button>
                {  isClicked ?<PostBlog data={isClicked?create:console.log("err")} />:console.log("not Posted")}
            </form>
            </div>
            </div>
       </div>
}


export default Form
