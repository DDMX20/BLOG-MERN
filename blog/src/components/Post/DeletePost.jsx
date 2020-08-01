import React,{useEffect} from "react";
import {Link} from "react-router-dom"
function DeletePost(props){

  useEffect(()=>{
      fetchItems()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const fetchItems= async() =>
  {
      const main = await fetch("http://localhost:5000/posts/"+props.match.params.id)
      const del=main.url
      const data = fetch(del+"/delete", {method: 'DELETE'})
      return data.json()
  }

        return (<div>
                <p>deleted!</p>
                <Link to = "/posts">  POSTS  </Link>
                </div>
               )

          };

export default DeletePost;
