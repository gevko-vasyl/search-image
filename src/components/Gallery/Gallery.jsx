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

const Gallery = ({ images, onImageClick }) => {
  const classes = useStyles();
  return (
    <ul className={classes.gallery}>
      {images.map(({ webformatURL, id, largeImageURL }) => (
        <GalleryItem
          key={id}
          img={webformatURL}
          onImageClick={onImageClick}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};

export default Gallery;
