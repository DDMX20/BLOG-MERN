import React from "react";
import {Link} from "react-router-dom"
import "../css/home.css"

function Home() {

  return <div className="home">

    <Link to = "/posts">
    <li>POSTS</li>
</Link>
<Link to = "/Form">
<li>CREATE</li>
</Link>
  </div>

}

export default Home
