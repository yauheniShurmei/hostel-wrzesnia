import Link from "next/link";

const Navlink = (props) => {
  return <Link {...props.link}>{props.name}</Link>;
};

export default Navlink;
