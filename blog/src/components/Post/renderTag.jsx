import React from "react"
function RenderTag(tags)
 {
   return tags.map(tags=>
     {
       return  <span key={tags} >{tags}</span>
     }
     )

  }

export default RenderTag
