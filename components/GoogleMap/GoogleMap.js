const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
  return (
    <div style={{ height: "300px", width: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1141.363407635044!2d17.549750590355014!3d52.332304816345236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704e95e08feb90b%3A0x45a616689a6212ca!2sLetnia%2020%2C%2062-302%20Wrze%C5%9Bnia!5e0!3m2!1sen!2spl!4v1624979616737!5m2!1sen!2spl"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        // allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
