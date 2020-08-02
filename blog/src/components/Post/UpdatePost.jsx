// import React,{useEffect,useState} from "react";
// import Form from "../Form/BlogForm"
//
// function UpdatePost(props){
//   const date = new Date();
//   const [post,update]= useState({})
//   const {title,createdAt,tags,html}=post
//   useEffect(()=>{
//       fetchItems()
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[])
//   const fetchItems= async() =>{
//       const data = await fetch("http://localhost:5000/posts/"+props.match.params.id)
//       const set = await data.json();
//     update(set)
//   }
//
// ///////post data/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const updateItem= async() =>
//   {   console.log("hello");
//       const main = await fetch("http://localhost:5000/posts/"+props.match.params.id)
//       const del=main.url
//       fetch(del+"/update", {method: 'PUT'})
//   }
// props.set?updateItem():console.log("not deleted")
//
//     return (<div>
//             <Form title= {title} createdAt={date} tags={tags} html={html} update={true} post={post}/>
//             </div>
//            )
//         };
//
// export default UpdatePost;
