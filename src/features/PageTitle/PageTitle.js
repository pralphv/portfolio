import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(2),
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontWeight: "300"
  }
}));

export default function PageTitle({ text, name }) {
  // name is for scrolling
  const classes = useStyles();
  return (
    <Typography variant="h5" align="center" className={classes.title} name={name}>
      {text}
    </Typography>
  );
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string
};

