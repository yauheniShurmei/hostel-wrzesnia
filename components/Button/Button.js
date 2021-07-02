import classes from "./Button.module.css";
import Link from "next/link";

const Button = (props) => {
  // let rel = props.rel ? props.rel : null;
  return (
    <div className={classes.Button}>
      <Link rel={props.rel} href={`${props.href}`}>
        {props.children}
      </Link>
    </div>
  );
};

export default Button;
