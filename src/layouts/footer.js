import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import { GITHUB_PAGE, GITHUB_PORTFOLIO, LINKEDIN } from "../constants";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#191928",
    width: "100%",
    position: "absolute",
    marginTop: "2em",
    marginLeft: "-2em",
    marginBottom: "-2em",
    minHeight: "15vh"
  },
  text: {
    opacity: "80%",
    padding: theme.spacing(1),
    lineHeight: "2em",
    fontWeight: "300",
    color: "#636da4",
    cursor: "pointer",
    "&:hover": {
      opacity: "100%",
      transition: theme.transitions.create("opacity", {
        duration: theme.transitions.duration.shortest
      })
    }
  },
  icon: {
    opacity: "80%",
    color: "#9b9ac5",
    cursor: "pointer",
    "&:hover": {
      opacity: "100%",
      transition: theme.transitions.create("opacity", {
        duration: theme.transitions.duration.shortest
      })
    }
  }
}));

export default function Footer() {
  const classes = useStyles();

  function openNewTab(url) {
    window.open(url, "_blank");
  }

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography
            className={classes.text}
            variant="body2"
            align="center"
            color="primary"
            onClick={() => openNewTab(GITHUB_PORTFOLIO)}
          >
            Designed & developed by Ralph Vincent O., Perez
          </Typography>
        </Grid>
        <Grid item>
          <Grid spacing={2} container direction="row" alignItems="center">
            <Grid item>
              <LinkedInIcon
                className={classes.icon}
                onClick={() => openNewTab(LINKEDIN)}
              />
            </Grid>
            <Grid item>
              <GitHubIcon
                className={classes.icon}
                onClick={() => openNewTab(GITHUB_PAGE)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
