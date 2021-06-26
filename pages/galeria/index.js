import PageContentCard from "../../components/PageContentCard/PageContentCard";
import MyGallery from "../../components/Gallery/Gallery";
import classes from "./index.module.css";

const Galeria = () => {
  return (
    <PageContentCard classes={classes.Galeria}>
      <h1>Galeria</h1>
      <span>
        <MyGallery />
      </span>
    </PageContentCard>
  );
};

export default Galeria;
