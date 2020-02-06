import React from "react";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    textTransform: "uppercase",
    width: "100%",
    height: "100%",
  },
  name: {
    marginTop: "-1em",
    letterSpacing: "0.5em",
    wordSpacing: "0.4em",
    fontWeight: "400"
  },
  subTitle: {
    letterSpacing: "0.4em"
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Typography
            className={`${classes.name} ${classes.root}`}
            variant="h2"
            align="center"
          >
            Ralph Perez
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={`${classes.subTitle} ${classes.root}`}
            variant="h5"
            align="center"
          >
            Full-Stack Developer
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
