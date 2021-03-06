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
            in technology led me to pursue a career in technology. Knowing the
            disadvantage that I have put myself in by not having a Computer
            Science degree, I work hard to close the gap between me and Computer
            Science graduates. I am now confident to say that I am a competent
            developer.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={classes.paragraph}
            variant="body2"
            align="center"
          >
            Currently, I am working in a hedge fund as a full-stack developer
            with a small team. Workload is high, fast-paced and sometimes
            stressful, but ultimately rewarding as I am able to hone my skills
            and make meaningful contributions.
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
