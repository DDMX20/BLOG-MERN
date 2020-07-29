import React from "react";
import {Link} from "react-router-dom"
function Home() {

  return <div>
    <Link to = "/posts">
    <li>Post</li>
</Link>
<Link to = "/">
<li>Home</li>
</Link>

  </div>

}

export default Home
