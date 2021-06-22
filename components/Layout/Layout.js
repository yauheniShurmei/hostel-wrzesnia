import Navbar from "../Navbar/Navbar";
import DownInfo from "../DownInfo/DownInfo";
import ImageBoard from "../ImageBoard/ImageBoard";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <ImageBoard />
      <main className={classes.main}>{props.children}</main>
      <DownInfo />
    </div>
  );
};

export default Layout;
