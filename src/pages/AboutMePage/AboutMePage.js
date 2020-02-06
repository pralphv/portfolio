import React from "react";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { PageTitle } from "../../features";

const useStyles = makeStyles(theme => ({
  paragraph: {
    padding: theme.spacing(1),
    lineHeight: "2em",
    fontWeight: "300"
  }
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
      >
        <Grid item>
          <Typography
            className={classes.paragraph}
            variant="body2"
            align="center"
          >
            Despite graduating with an Accounting & Finance Degree from The
            University of Hong Kong, my passion in technology led me to pursue a
            career in technology. Knowing the disadvantage that I have put
            myself in by not having a Computer Science degree, I work hard to
            close the gap between me and Computer Science graduates. I am now
            fairly confident to say that I am a competent developer.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={classes.paragraph}
            variant="body2"
            align="center"
          >
            Currently, I am working in an international investment bank where I
            focus on automation. Cutting manual work and reducing operational
            risks are ways I bring value.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => window.open("cv.pdf")}
            style={{marginTop: "1em"}}
          >
            Resume
          </Button>
        </Grid>
      </Grid>

    </div>
  );
}
