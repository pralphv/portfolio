import React from "react";
import PropTypes from "prop-types";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const useStyles = makeStyles(theme => ({
  root: {
    textTransform: "uppercase",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "400",
    "&:hover": {
      color: theme.palette.primary.main,
      transition: theme.transitions.create("color", {
        duration: theme.transitions.duration.complex
      })
    }
  }
}));

export default function NavigationText({ text, scroll }) {
  const classes = useStyles();
  return (
    <Link
      activeClass="active"
      to={scroll}
      spy={true}
      smooth={true}
      duration={500}
    >
      <Typography className={classes.root} variant="subtitle2">
        {text}
      </Typography>
    </Link>
  );
}
// scroll
// PostList.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     formattedTitle: PropTypes.string,
//   })),
// };

// PostList.defaultProps = {
//   posts: [],
// };
