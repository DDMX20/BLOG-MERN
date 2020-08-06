import React,{useEffect,useState} from "react";

import { useHistory } from "react-router-dom";
function UpdateBlog(props){
  const history = useHistory();
  useEffect(() => {

     fetchItems();

       // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
  const fetchItems= async() =>
    {
        const main = await fetch("http://localhost:5000/posts/"+props.id)
        const del=main.url
        fetch(del, {method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(props.data)}
      )
       history.push("/");
    }
    console.log(props.data)


    return (<div>
          UPDATED
            </div>
           )
        };

export default UpdateBlog;
