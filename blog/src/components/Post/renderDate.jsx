// eslint-disable-next-line
import React from "react"

function RenderDate(dataString ) {

  const date =new Date(dataString)
  const month = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
  return (date.getDate() +" "+month[date.getMonth()] +" "+date.getFullYear())

}

export default RenderDate;
