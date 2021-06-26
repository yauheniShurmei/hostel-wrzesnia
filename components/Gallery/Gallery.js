import ImageGallery from "react-image-gallery";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "http://noclegiwrzesnia.com.pl/images/galeria/2.jpg",
    thumbnail: "http://noclegiwrzesnia.com.pl/images/galeria/2.jpg",
  },
  {
    original: "http://noclegiwrzesnia.com.pl/images/galeria/3.jpg",
    thumbnail: "http://noclegiwrzesnia.com.pl/images/galeria/3.jpg",
  },
  {
    original: "http://noclegiwrzesnia.com.pl/images/galeria/4.jpg",
    thumbnail: "http://noclegiwrzesnia.com.pl/images/galeria/4.jpg",
  },
  {
    original: "http://noclegiwrzesnia.com.pl/images/galeria/1.jpg",
    thumbnail: "http://noclegiwrzesnia.com.pl/images/galeria/1.jpg",
  },
  {
    original: "http://noclegiwrzesnia.com.pl/images/galeria/5.jpg",
    thumbnail: "http://noclegiwrzesnia.com.pl/images/galeria/5.jpg",
  },
  {
    original: "http://noclegiwrzesnia.com.pl/images/galeria/6.jpg",
    thumbnail: "http://noclegiwrzesnia.com.pl/images/galeria/6.jpg",
  },
  {
    original: "http://noclegiwrzesnia.com.pl/images/galeria/7.jpg",
    thumbnail: "http://noclegiwrzesnia.com.pl/images/galeria/7.jpg",
  },
  {
    original: "http://noclegiwrzesnia.com.pl/images/galeria/8.jpg",
    thumbnail: "http://noclegiwrzesnia.com.pl/images/galeria/8.jpg",
  },
  {
    original: "http://noclegiwrzesnia.com.pl/images/galeria/9.jpg",
    thumbnail: "http://noclegiwrzesnia.com.pl/images/galeria/9.jpg",
  },
  {
    original: "http://noclegiwrzesnia.com.pl/images/galeria/10.jpg",
    thumbnail: "http://noclegiwrzesnia.com.pl/images/galeria/10.jpg",
  },
  {
    original: "http://noclegiwrzesnia.com.pl/images/galeria/11.jpg",
    thumbnail: "http://noclegiwrzesnia.com.pl/images/galeria/11.jpg",
  },
  {
    original: "http://noclegiwrzesnia.com.pl/images/galeria/12.jpg",
    thumbnail: "http://noclegiwrzesnia.com.pl/images/galeria/12.jpg",
  },
];

const MyGallery = () => {
  return <ImageGallery items={images} />;
};

export default MyGallery;
