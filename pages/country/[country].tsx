import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import style from "@style/Country.module.scss";
import React from "react";
import { Params } from "types/component";
import { country } from "types/countries";
import AboutHeader from "components/aboutHeader";

import Image from "next/image";
const Country = (props: { country: country[] }) => {
  return (
    <div>
      <Head>
        <title>{props.country[0].name.official}</title>
      </Head>
      {props.country.map((e, i) => {
        return (
          <div className={style.countryOne} key={i}>
            <div className={style.flagDiv}>
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
                  <Image
                    loader={() => e.coatOfArms.svg}
                    placeholder={"blur"}
                    blurDataURL="https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg?w=2000"
                    src={e.coatOfArms.svg}
                    width={200}
                    height={200}
                  />
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
                <a target="_blank" rel="noreferrer" href={e.maps.googleMaps}>
                  Bu yerda
                </a>
              </p>
              <p>
                <span>Boshqa xarita:</span>{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={e.maps.openStreetMaps}
                >
                  Bu yerda
                </a>
              </p>
              <p>
                <span>Rasmiy nomi:</span> {e.name.official}
              </p>
              <p>
                <span>Hududi: </span>
                {e.region}, {e.subregion}
              </p>
              <p>
                <span>Aholisi:</span> {e.population} kishi
              </p>
              <p>
                <span>Nomlari: </span> {e.altSpellings.map((e, i) => e + ", ")}
              </p>
              <p>
                <span>Chegaralari: </span>{" "}
                {(e.borders && e.borders.map((e, i) => <a>{e + ", "}</a>)) || (
                  <p>Bu davlatda chegaralar nomalum</p>
                )}
              </p>
              <p>
                <span>Vaqt zonasi: </span>
                {e.timezones}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
Country.getLayout = (page: NextPage) => {
  return (
    <>
      <AboutHeader />
      {page}
    </>
  );
};
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
