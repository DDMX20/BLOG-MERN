import React from "react";
import {Link} from "react-router-dom"


function Home() {

  return <div className="Page">
          <div className="home">
            <Link to = "/posts">
            <li id="a">POSTS</li>
            </Link>
            <Link to = "/Form">
            <li id="a">CREATE</li>
            </Link>
        </div>


        </div>

}

export default Home
