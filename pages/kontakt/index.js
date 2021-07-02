import PageContentCard from "../../components/PageContentCard/PageContentCard";
import classes from "./index.module.css";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

const Kontakt = () => {
  return (
    <PageContentCard classes={classes.Kontakt}>
      <h1>Kontakt</h1>
      <p>
        <span>
          Pokoje gościnne ARKADIA
          <br />
          os. Lipówka, ul. Letnia 20
          <br /> 62-300 Września
          <br />
          <a href="tel:(+48) 513 180 898">tel. (+48) 513 180 898</a>
          <br />
          Villa ARKADIA
          <br />
          <a href="mailto:malgorzata.sikorska@arkadiawrzesnia.pl">
            malgorzata.sikorska@arkadiawrzesnia.pl
          </a>
        </span>
      </p>
      <p>
        <span>
          Zobacz nas na:
          <br />
          <a href="https://meteor-turystyka.pl/arkadia-wrzesnia,wrzesnia.html">
            https://meteor-turystyka.pl/arkadia-wrzesnia,wrzesnia.html
          </a>
        </span>
      </p>
      <GoogleMap />
    </PageContentCard>
  );
};

export default Kontakt;
