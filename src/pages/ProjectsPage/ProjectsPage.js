import React from "react";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Image, PageTitle } from "../../features";

const images = [
  {
    imgPath: "/images/color_system_builder.jpg",
    caption: "Color System Builder"
  },
  { imgPath: "/images/petangle.jpg", caption: "Petangle" },
  { imgPath: "/images/sitemap_generator.jpg", caption: "Sitemap Generator" }
];

export default function ProjectsPage() {
  return (
    <div>
      <PageTitle text="Projects" name="projects"/>
      <Grid
        container
        spacing={5}
        direction="row"
        alignItems="center"
        justify="center"
      >
        {images.map(imgObj => (
          <Grid item key={imgObj.imgPath}>
            <Image imgPath={imgObj.imgPath} caption={imgObj.caption} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
