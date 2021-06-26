import classes from "./Button.module.css";
// import Link from "next/link";

const Button = (props) => {
  return (
    <div className={classes.Button}>
      <a href={`${props.href}`}>{props.children}</a>
    </div>
  );
};

export default Button;
