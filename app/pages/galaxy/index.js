import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Planets.module.css";

export const getStaticProps = async (props) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  return {
    props: {
      planets: data,
    },
  };
};

const index = ({ planets }) => {
  return (
    <>
      <Head>
        <title>Galaxy | Planets List</title>
      </Head>
      <div>
        <h1>Planets List</h1>

        {planets.map((planet) => (
          <Link key={planet.id} href={"/galaxy/" + planet.id}>
            <a className={styles.single}>{planet.name.split(" ")[1]} Planet</a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default index;
