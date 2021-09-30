import { createUseStyles } from "react-jss";
import PropagateLoader from "react-spinners/PropagateLoader";

const useStyles = createUseStyles({
  spinners: { display: "box", marginRight: "auto", marginLeft: "auto" },
});

const Spinner = ({ loading }) => {
  const classes = useStyles();
  return (
    <PropagateLoader
      className={classes.spinner}
      color="blue"
      loading={loading}
    />
  );
};

export default Spinner;
