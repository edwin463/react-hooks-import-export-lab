import React from "react";
import {username, city} from "../data/user";

function Home() {
  return (
    <div id="Home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;