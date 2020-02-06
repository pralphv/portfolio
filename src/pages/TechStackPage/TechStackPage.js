import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Icon, PageTitle } from "../../features";
import { IMG_DIR_PATH } from "./constants";

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(2),
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontWeight: "300"
  }
}));

const frontEndIcons = [
  {
    imgPath: `${IMG_DIR_PATH}HTML5_logo_and_wordmark.svg`,
    useBg: true
  },
  {
    imgPath: `${IMG_DIR_PATH}CSS3_logo_and_wordmark.svg`,
    useBg: true
  },
  {
    imgPath: `${IMG_DIR_PATH}Unofficial_JavaScript_logo_2.svg`,
    useBg: false
  },
  {
    imgPath: `${IMG_DIR_PATH}ts.png`,
    useBg: false
  },
  {
    imgPath: `${IMG_DIR_PATH}React-icon.svg`,
    useBg: false
  }
];

const backEndIcons = [
  {
    imgPath: `${IMG_DIR_PATH}Python-logo-notext.svg`,
    useBg: false
  },
  {
    imgPath: `${IMG_DIR_PATH}pandas_secondary.svg`,
    useBg: true
  },
  {
    imgPath: `${IMG_DIR_PATH}numpy.png`,
    useBg: false
  },

  {
    imgPath: `${IMG_DIR_PATH}flask-seeklogo.com.svg`,
    useBg: true
  },
  {
    imgPath: `${IMG_DIR_PATH}django-logo-negative.svg`,
    useBg: false
  }
];
const dbIcons = [
  {
    imgPath: `${IMG_DIR_PATH}Antu_mysql-workbench.svg`,
    useBg: false
  },
  {
    imgPath: `${IMG_DIR_PATH}Postgresql_elephant.svg`,
    useBg: false
  },
  {
    imgPath: `${IMG_DIR_PATH}Firebase_Logo.svg`,
    useBg: true
  },
  {
    imgPath: `${IMG_DIR_PATH}MongoDB_Logo.svg`,
    useBg: false
  },
];

export default function TechStackPage() {
  const classes = useStyles();
  const allIcons = [frontEndIcons, backEndIcons, dbIcons];
  return (
    <div>
      <PageTitle text="Tech Stack" />
      {allIcons.map((images, i) => (
        <Grid
          key={i}
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
        >
          {images.map(imgObj => (
            <Grid item key={imgObj.imgPath}>
              <Icon imgPath={imgObj.imgPath} useBg={imgObj.useBg} />
            </Grid>
          ))}
        </Grid>
      ))}
    </div>
  );
}
