import React from "react"

function renderTag(tags) {

  return tags.map(tags=>{
    return  <span key={tags} >{tags}</span>
  })

}

export default renderTag
