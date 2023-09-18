import React from "react";
import Navbar from "./Navbar";
import ButtonClick from "./ButtonClick";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="grid justify-items-center text-6xl mt-20">
        <h2>Generation Thailand</h2>
        <h2>React-Accessment</h2>
        <ButtonClick />
      </div>
    </div>
  );
}

export default Home;
