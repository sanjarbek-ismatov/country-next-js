import style from "@style/Home.module.scss";
import Header from "components/header";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { country } from "types/countries";
const Index = (props: { data: country[] }) => {
  const [query, setquery] = useState("");
  return (
    <>
      <Header onChange={(e) => setquery(e.target.value)} value={query} />
      <main className={style.main}>
        <div className={style.container}>
          {props.data
            .filter((e, i) =>
              e.name.common.toLowerCase().includes(query.toLowerCase())
            )
            .map((e, i) => {
              return (
                <Link key={i} href={`/country/${e.name.common.toLowerCase()}`}>
                  <a className={style.link}>
                    <div className={style.card}>
                      <Image
                        className={style.flag}
                        loader={() => e.flags.png}
                        width={300}
                        height={200}
                        placeholder="blur"
                        blurDataURL="https://cdn.pixabay.com/photo/2015/06/24/02/12/the-blurred-819388_1280.jpg"
                        src={e.flags.png}
                        alt="flag"
                      />
                      <h2>{e.name.common}</h2>
                      <h3 className={style.text}>Hududi: {e.region}</h3>
                      <h3 className={style.text}>
                        Aholisi:{" "}
                        {e.population >= 1000000
                          ? Math.round(e.population / 1000000) + " million +"
                          : e.population}
                      </h3>
                    </div>
                  </a>
                </Link>
              );
            })}
        </div>
      </main>
    </>
  );
};

export default Index;
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};
