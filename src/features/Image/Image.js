import React, { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import { CustomDialog } from "../../features";

const useStyles = makeStyles(theme => ({
  image: {
    height: 110,
    margin: theme.spacing(1),
    boxShadow: "0em 0em 0.5em black",
    opacity: "0.6",
    padding: 0,
    cursor: "pointer",
    "&:hover": {
      opacity: "1",
      transform: "translateY(-0.2em)",
      transition: theme.transitions.create(["transform", "opacity"], {
        duration: theme.transitions.duration.enteringScreen
      })
    }
  },
  caption: {
    letterSpacing: "0.1em",
    fontWeight: "400",
    cursor: "pointer"
  }
}));

export default function Image({
  imgPath,
  caption,
  gifPath,
  title,
  content,
  github,
  url,
  techStack
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item onClick={handleClickOpen}>
          <img className={classes.image} src={imgPath} alt={imgPath} />
          <Typography
            className={`${classes.caption}`}
            variant="subtitle2"
            align="center"
          >
            {caption}
          </Typography>
        </Grid>
      </Grid>
      <CustomDialog
        gifPath={gifPath}
        title={title}
        content={content}
        github={github}
        url={url}
        techStack={techStack}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}

Image.propTypes = {
  imgPath: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};
