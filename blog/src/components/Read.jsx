import React,{useState,useEffect} from "react"

function Read(props) {
const [post,update]= useState({})
useEffect(()=>{
    fetchItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
const fetchItems= async() =>{
    const data = await fetch("http://localhost:5000/posts/"+props.id)
    const set = await data.json();
  update(set);

}

return <div>{props.data(post)}</div>
}
export default Read
