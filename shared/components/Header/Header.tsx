import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import LogoSvg from "../../assets/Logo.svg";
import MenuSvg from "../../assets/Menu.svg";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <Image src={LogoSvg} alt="SEVENKUST" />
      </Link>
      <div className={styles.menuElements}>
        <p>Free консультация</p>
        <p>RU</p>
        <button className={styles.menuButton}>
          <Image src={MenuSvg} alt="Menu" />
        </button>
      </div>
    </div>
  );
};
