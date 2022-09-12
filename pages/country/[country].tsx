import { GetServerSideProps } from "next";
import Head from "next/head";
import style from "@style/Country.module.scss";
import React from "react";
import { Params } from "types/component";
import { country } from "types/countries";

const Country = (props: { country: country[] }) => {
  return (
    <div>
      <Head>
        <title>{props.country[0].name.official}</title>
      </Head>
      {props.country.map((e, i) => {
        return (
          <div className={style.countryOne} key={i}>
            <div>
              <img
                className={style.flag}
                src={e.flags.svg}
                alt="davlat bayrog'i"
              />
              <h1>
                {e.name.common} <sup>{e.cca2}</sup>
              </h1>
            </div>
            <div className="desc">
              <div className="gerb">
                {e.coatOfArms.svg ? (
                  <img src={e.coatOfArms.svg} />
                ) : (
                  <p>Gerb mavjud emas!</p>
                )}
              </div>
              <p>
                <span>Maydoni:</span> {e.area / 10000} KM kvadrat
              </p>
              <p>
                <span>Poytaxti:</span> {e.capital}
              </p>
              <p>
                <span>Google xarita:</span>{" "}
                <a target="_blank" href={e.maps.googleMaps}>
                  Bu yerda
                </a>
              </p>
              <p>
                <span>Rasmiy nomi:</span> {e.name.official}
              </p>
              <p>
                <span>Hududi:</span>
                {e.region}, {e.subregion}
              </p>
              <p>
                <span>Aholisi:</span> {e.population} kishi
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;

export const getServerSideProps: GetServerSideProps<
  { country: country[] },
  Params
> = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${params?.country}?fullText=true`
  );
  const country = await res.json();
  return {
    props: {
      country: country,
    },
  };
};
