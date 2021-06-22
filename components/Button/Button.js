import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <a className={classes.Button} href={props.href}>
      {props.children}
    </a>
  );
};

export default Button;
