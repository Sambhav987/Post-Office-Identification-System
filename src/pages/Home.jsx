// Home.jsx
import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import HomeInput from "../components/HomeInput";
import LogoutButton from "../components/LogoutButton";

function Home() {
  return (
    <div>
      <Header />
      <div class="button-container">
        <LogoutButton />
      </div>
      <HomeInput />
    </div>
  );
}

export default Home;

