import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooops....</h1>
      <h2>Page can not be found</h2>
      <Link href="/">
        <a>Go to Home Page</a>
      </Link>
    </div>
  );
};

export default NotFound;
