import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  item: {
    marginRight: "15px",
  },
});

const GalleryItem = ({ img, onImageClick, largeImageURL }) => {
  const classes = useStyles();
  // console.log(img.webformatURL);
  return (
    <li className={classes.item}>
      <img
        src={img}
        alt=""
        width="150"
        height="150"
        onClick={() => onImageClick(largeImageURL)}
      />
    </li>
  );
};

export default GalleryItem;
