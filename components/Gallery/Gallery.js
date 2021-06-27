import ImageGallery from "react-image-gallery";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/gallery/1.jpg",
    thumbnail: "/gallery/1.jpg",
  },
  {
    original: "/gallery/2.jpg",
    thumbnail: "/gallery/2.jpg",
  },
  {
    original: "/gallery/3.jpg",
    thumbnail: "/gallery/3.jpg",
  },
  {
    original: "/gallery/4.jpg",
    thumbnail: "/gallery/4.jpg",
  },
  {
    original: "/gallery/5.jpg",
    thumbnail: "/gallery/5.jpg",
  },
  {
    original: "/gallery/6.jpg",
    thumbnail: "/gallery/6.jpg",
  },
  {
    original: "/gallery/7.jpg",
    thumbnail: "/gallery/7.jpg",
  },
  {
    original: "/gallery/8.jpg",
    thumbnail: "/gallery/8.jpg",
  },
  {
    original: "/gallery/9.jpg",
    thumbnail: "/gallery/9.jpg",
  },
  {
    original: "/gallery/10.jpg",
    thumbnail: "/gallery/10.jpg",
  },
  {
    original: "/gallery/11.jpg",
    thumbnail: "/gallery/11.jpg",
  },
  {
    original: "/gallery/12.jpg",
    thumbnail: "/gallery/12.jpg",
  },
];

const MyGallery = () => {
  return <ImageGallery items={images} />;
};

export default MyGallery;
