import classes from "./Button.module.css";
import Link from "next/link";

const Button = (props) => {
  return (
    <div className={classes.Button}>
      <Link {...props}>{props.children}</Link>
    </div>
  );
};

export default Button;
