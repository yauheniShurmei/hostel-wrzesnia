import classes from "./PageContentCard.module.css";

const PageContentCard = (props) => {
  return (
    <main className={classes.PageContentCard}>
      <section>{props.children}</section>
    </main>
  );
};

export default PageContentCard;
