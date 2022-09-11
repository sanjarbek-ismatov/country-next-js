import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { country } from "types/countries";

const Country = (props: { country: country[] }) => {
  return (
    <div>
      {props.country.map((e, i) => {
        return <img key={i} src={e.flags.png} />;
      })}
    </div>
  );
};

export default Country;
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${
      params && params.country
    }?fullText=true`
  );
  const country = await res.json();

  return {
    props: {
      country: country,
    },
    revalidate: 30,
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();
  const page = data.map((e: country, i: number) => {
    return {
      params: {
        country: e.name.common.toLowerCase(),
      },
    };
  });

  return {
    paths: page,
    fallback: true,
  };
};
