import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NavigationText from "./NavigationText";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const texts = [
  { text: "Resume", path: "/" },
  { text: "Contact", scroll: "contact" },
  { text: "About", scroll: "about" },
  { text: "Projects", scroll: "projects" },
];

export default function NavigationBar() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="flex-start" direction="row-reverse"spacing={2}>
          {texts.map(text => (
            <Grid key={text.text} item>
              <NavigationText text={text.text} scroll={text.scroll}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
