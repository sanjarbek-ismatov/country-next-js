import style from "@style/Home.module.scss";
import { GetStaticProps } from "next";
import Image from "next/image";
import { country } from "types/countries";
const Index = (props: { data: country[] }) => {
  return (
    <main className={style.main}>
      <div className={style.container}>
        {props.data.map((e, i) => {
          return (
            <div key={i} className={style.card}>
              <Image
                className={style.flag}
                loader={() => e.flags.png}
                width={300}
                height={200}
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
          );
        })}
      </div>
    </main>
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
