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
      <div className={style.inputContainer}>
        <label className={style.label} htmlFor="country">
          Mamlakatni qidiring
        </label>
        <input
          className={style.input}
          type="search"
          name="country"
          autoComplete="off"
          required
        />
      </div>
    </div>
  );
};

export default Header;
