import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "@style/Header.module.scss";

import Link from "next/link";

const AboutHeader = () => {
  return (
    <div className={style.header}>
      <Link href="/">
        <FontAwesomeIcon className="icon" icon={faHome} />
      </Link>
      <h1 className={style.parag}>Country with Next js</h1>
    </div>
  );
};

export default AboutHeader;
