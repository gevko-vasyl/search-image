import GalleryItem from "./GalleryItem";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    padding: "15px",
    listStyle: "none",
  },
});

const Gallery = ({ images }) => {
  const classes = useStyles();
  return (
    <ul className={classes.gallery}>
      {images.map(({ webformatURL, id }) => (
        <GalleryItem key={id} img={webformatURL} />
      ))}
    </ul>
  );
};

export default Gallery;
