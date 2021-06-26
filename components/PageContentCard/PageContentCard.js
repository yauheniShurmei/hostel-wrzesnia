import classes from "./PageContentCard.module.css";

const PageContentCard = (props) => {
  let allClasses = [props.classes, classes.PageContentCard];

  return (
    <main className={allClasses.join(" ")}>
      <section>{props.children}</section>
    </main>
  );
};

export default PageContentCard;
