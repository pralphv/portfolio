import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    height: 70,
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  },
  withBg: {
    background: "#e7e7e7"
  }
}));

export default function Icon({ imgPath, useBg = false }) {
  const classes = useStyles();
  const classToUse = useBg ? `${classes.icon} ${classes.withBg}` : classes.icon;
  return <img className={classToUse} src={imgPath} alt={imgPath} />;
}

Icon.propTypes = {
  imgPath: PropTypes.string.isRequired
};

// PostList.defaultProps = {
//   posts: [],
// };
