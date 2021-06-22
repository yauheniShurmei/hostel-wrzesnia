import classes from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={classes.Navbar}>
      <main>
        <div>
          <img src="logo_arcadia.png" />
        </div>
        <nav>
          <Link href="/strona-glowna">STRONA GŁÓWNA</Link>
          <Link href="#">OFERTA</Link>
          <Link href="/galeria">GALERIA</Link>
          <Link href="#">KONTAKT</Link>
          <span>
            <Link href="#">PL</Link>
            {/* <Link href="#">RUS</Link> */}
          </span>
        </nav>
      </main>
    </header>
  );
};

export default Navbar;
