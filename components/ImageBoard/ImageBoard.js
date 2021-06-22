import classes from "./ImageBoard.module.css";

const ImageBoard = () => {
  return (
    <section className={classes.ImageBoard}>
      <div>
        <div className={classes.Tytul}>
          <h1>POKOJE GOŚCINNE ARKADIA WE WRZEŚNI</h1>
        </div>
        <span>
          <a href="tel: 513-180-898">tel. 513-180-898 |</a>
          <a href="tel: 692-350-920"> 692-350-920</a>
        </span>
      </div>
    </section>
  );
};

export default ImageBoard;
