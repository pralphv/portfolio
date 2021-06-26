import React from "react";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { PageTitle } from "../../features";

const useStyles = makeStyles((theme) => ({
  paragraph: {
    padding: theme.spacing(1),
    lineHeight: "2em",
    fontWeight: "300",
  },
}));

export default function AboutMePage() {
  const classes = useStyles();
  return (
    <div>
      <PageTitle text="About Me" name="about" />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ maxWidth: "60em" }}
      >
        <Grid item>
          <Typography
            className={classes.paragraph}
            variant="body2"
            align="center"
          >
            Despite graduating with an Accounting & Finance Degree, my passion
            in technology led me to pursue a career in technology. After many years
            in Hong Kong, I have decided to move to Canada to pursue a career in 
            Software Engineering.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={classes.paragraph}
            variant="body2"
            align="center"
          >
            My skillset focuses on full-stack web development, maining in Python and React. 
            I am always happy to pick up new frameworks or languages.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => window.open("cv.pdf")}
            style={{ marginTop: "1em" }}
          >
            Resume
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
