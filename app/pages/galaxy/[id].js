import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((planet) => {
    {
      return {
        params: {
          id: planet.id.toString(),
        },
      };
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + context.params.id
  );

  const data = await res.json();

  return {
    props: {
      planet: data,
    },
  };
};

const Details = ({ planet }) => {
  return (
    <>
      <h1>Details:</h1>
      <h2>Planet {planet.name.split(" ")[1]}</h2>
      <h4>Also called: {planet.username}</h4>
      <h5>Cordinates: {planet.address.zipcode}</h5>
    </>
  );
};

export default Details;
