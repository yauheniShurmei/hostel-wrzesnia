import Navbar from "../Navbar/Navbar";
import DownInfo from "../DownInfo/DownInfo";
import ImageBoard from "../ImageBoard/ImageBoard";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <ImageBoard />
      <main>{props.children}</main>
      <DownInfo />
    </div>
  );
};

export default Layout;
