import classes from "./Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import i18n from "../../pages/i18n";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const { t, i18n } = useTranslation();

  let menuClasses = [classes.navLink, classes.CloseMenu];
  isOpenBurgerMenu ? (menuClasses[1] = classes.OpenMenu) : null;

  let openCloseMenuClasses = [classes.BurgerMenuDiv, classes.isClose];
  isOpenBurgerMenu ? (openCloseMenuClasses[1] = classes.isOpen) : null;

  const onOpenMenuHandler = () => {
    setIsOpenBurgerMenu(!isOpenBurgerMenu);
  };

  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
      console.log(`Language changed to ${ln}`);
    };
  };

  return (
    <header className={classes.Navbar}>
      <main>
        <div className={classes.Logo}>
          <img src="logo_arcadia.png" />
        </div>
        <nav className={menuClasses.join(" ")} onClick={onOpenMenuHandler}>
          <Link href="/">{t("STRONA")}</Link>
          <Link href="/cennik">{t("CENNIK")}</Link>
          <Link href="/galeria">{t("GALERIA_navbar")}</Link>
          <Link href="/kontakt">{t("KONTAKT")}</Link>
          <span>
            <button onClick={changeLanguage("pl")}>PL</button>
            <button onClick={changeLanguage("ukr")}>UKR</button>
          </span>
        </nav>
        <section className={classes.BurgerMenuSection}>
          <div
            onClick={onOpenMenuHandler}
            className={openCloseMenuClasses.join(" ")}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </main>
    </header>
  );
};

export default Navbar;
