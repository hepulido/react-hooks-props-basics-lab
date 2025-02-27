import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home  city={user.city} name={user.name} color={user.color}/>
      <About bio={user.bio} link={user.links.github} link1={user.links.linkedin}/>
    </div>
  );
}

export default App;
