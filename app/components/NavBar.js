import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Planets List</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/galaxy/planetsList">
        <a>Planet Listing</a>
      </Link>
    </nav>
  );
};

export default NavBar;
