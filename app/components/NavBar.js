import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/planet.png" width={70} height={70} />
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
