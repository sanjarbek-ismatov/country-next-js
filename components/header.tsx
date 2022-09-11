import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "@style/Header.module.scss";
import type { NextPage } from "next";
import Link from "next/link";
const Header: NextPage = () => {
  return (
    <div className={style.header}>
      <Link href="/">
        <FontAwesomeIcon className="icon" icon={faHome} />
      </Link>
      <h1>Country with Next js</h1>
      <div className={style.inputContainer}>
        <input
          className={style.input}
          type="search"
          name="country"
          placeholder="Mamlakatni qidiring"
          autoComplete="off"
          required
        />
      </div>
    </div>
  );
};

export default Header;
