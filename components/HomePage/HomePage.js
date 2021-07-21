import Button from "../Button/Button";
import PageContentCard from "../PageContentCard/PageContentCard";
import classes from "../../pages/cennik/index.module.css";
import { useTranslation } from "next-i18next";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <PageContentCard>
      <h1>{t("Oferta")}</h1>
      <p>
        <span>{t("Pokoje")}</span> {t("oferuje")}
        <br />
        <br />
        <span>{t("Obiekt")}</span> {t("oraz")}
        <br />
        <br />
        {t("Goście")}
        <br />
        <br />
        {t("Najbliższy")}
      </p>
      <p>
        <span>Villa ARKADIA</span>
        <a href="mailto:malgorzata.sikorska@arkadiawrzesnia.pl">
          malgorzata.sikorska@arkadiawrzesnia.pl
        </a>
      </p>
      <section>
        <Button href="/galeria">{t("GALERIA_button")}</Button>
        <div style={{ position: "relative" }}>
          <Button rel="noopener noreferrer" href="/cennik">
            {t("CENNIK")}
          </Button>
          <a
            style={{
              position: "absolute",
              color: "red",
              textDecoration: "underline",
              left: "20px",
            }}
            href="/cennik.pdf"
            download="/cennik.pdf"
            target="_blank"
          >
            {t("pobierz")}
          </a>
        </div>
      </section>
      <div className={classes.BackgroundImage}></div>
    </PageContentCard>
  );
};

export default HomePage;
