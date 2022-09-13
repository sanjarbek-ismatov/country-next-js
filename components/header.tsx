import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "@style/Header.module.scss";

import Link from "next/link";
import { HeaderType } from "types/component";
const Header = ({ onChange, value }: HeaderType) => {
  return (
    <div className={style.header}>
      <Link href="/">
        <FontAwesomeIcon className="icon" icon={faHome} />
      </Link>
      <h1 className={style.parag}>Country with Next js</h1>
      <div className={style.inputContainer}>
        <input
          className={style.input}
          type="search"
          name="country"
          onChange={onChange}
          value={value}
          placeholder="Mamlakatni qidiring"
          autoComplete="off"
          required
        />
      </div>
    </div>
  );
};

export default Header;
