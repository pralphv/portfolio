import React from "react";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { PageTitle } from "../../features";
import { EMAIL } from "../../constants";

const useStyles = makeStyles(theme => ({
  paragraph: {
    padding: theme.spacing(1),
    lineHeight: "2em",
    fontWeight: "300"
  }
}));

export default function ContactMePage() {
  const classes = useStyles();
  return (
    <div>
      <PageTitle text="Contact Me" name="contact"/>
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
            variant="subtitle2"
            align="center"
          >
            Please feel free to reach out by E-mail or LinkedIn. I'll try my
            best to reply as soon as possible!
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => window.open(`mailto:${EMAIL}`)}
            style={{marginTop: "1em"}}

          >
            Email Me
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
