import React,{useState} from "react";
import PostBlog from "./Post/PostBlog"



function Form() {
  const [isClicked,clicked] = useState(false)
  const [create, update] = useState(
      {title: "g",
      createdAt: "g",
      tags:["g"],
      html:"f"})
  const{title,createdAt,tags,html} = create

 function handleChange(event) {
  const {name,value}= event.target
  update((prev)=>{
    return {...prev,
    [name]:value}})
}

function handleClick(event) {
   clicked(true)

  console.log(isClicked);
  console.log(create);
  event.preventDefault()
}
  return <div>

          <form action="/newposts">
            <input onChange ={handleChange} type="text" name="title" value={title} placeholder="TITLE"/>
            <input onChange ={handleChange} type="text" name="createdAt" value={createdAt}placeholder="DATE/Month/Year"/>
            <input onChange ={handleChange} type="text" name="tags" value={tags}placeholder="TAGS"/>
          <textarea onChange ={handleChange}  name="html" value={html}/>
          <button onClick={handleClick} type="Submit" name="html">Submit</button>
{  isClicked ?<PostBlog data={isClicked?create:console.log("err")} />:console.log("not Posted")}
          </form>

        </div>
}


export default Form
