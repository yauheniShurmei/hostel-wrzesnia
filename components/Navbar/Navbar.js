import classes from "./Navbar.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  let menuClasses = [classes.navLink, classes.CloseMenu];
  isOpenBurgerMenu ? (menuClasses[1] = classes.OpenMenu) : null;

  let openCloseMenuClasses = [classes.BurgerMenuDiv, classes.isClose];
  isOpenBurgerMenu ? (openCloseMenuClasses[1] = classes.isOpen) : null;

  const onOpenMenuHandler = () => {
    setIsOpenBurgerMenu(!isOpenBurgerMenu);
  };

  return (
    <header className={classes.Navbar}>
      <main>
        <div className={classes.Logo}>
          <img src="logo_arcadia.png" />
        </div>
        <nav className={menuClasses.join(" ")} onClick={onOpenMenuHandler}>
          <Link href="/">STRONA GŁÓWNA</Link>
          <Link href="/cennik">CENNIK</Link>
          <Link href="/galeria">GALERIA</Link>
          <Link href="/kontakt">KONTAKT</Link>
          <span>
            <Link href="#">PL</Link>
            {/* <Link href="#">RUS</Link> */}
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
