import PageContentCard from "../../components/PageContentCard/PageContentCard";
import classes from "./index.module.css";
import { useTranslation } from "react-i18next";

const Cennik = () => {
  const { t, i18next } = useTranslation();
  return (
    <PageContentCard>
      <h1>{t("Cennik")}</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>1 {t("noc")}</th>
            <th>2-14 {t("noce")}</th>
            <th>15-30 {t("noce")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("nocleg")}</td>
            <td>50,0zł</td>
            <td>40,00zł</td>
            <td>35,00zł</td>
          </tr>
          <tr>
            <td>{t("pokój_2os")}</td>
            <td>100,0zł</td>
            <td>80,00zł</td>
            <td>70,00zł</td>
          </tr>
          <tr>
            <td>{t("pokój_2os")}</td>
            <td>150,0zł</td>
            <td>120,00zł</td>
            <td>105,00zł</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h2>{t("POBYT")}</h2>
      <div className={classes.BackgroundImage}></div>
    </PageContentCard>
  );
};

export default Cennik;
