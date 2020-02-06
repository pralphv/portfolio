import React from "react";

import Grid from "@material-ui/core/Grid";
import { Image, PageTitle } from "../../features";
import {
  GITHUB_PETANGLE,
  GITHUB_SITEMAP_GENERATOR,
  GITHUB_COLOR_SYSTEM_BUILDER,
  PETANGLE,
  SITEMAP_GENERATOR,
  COLOR_SYSTEM_BUILDER
} from "../../constants";
import {
  PETANGLE_CONTENT,
  COLOR_SYSTEM_BUILDER_CONTENT,
  SITEMAP_GENERATOR_CONTENT
} from "./constants";

const images = [
  {
    imgPath: "images/color_system_builder.jpg",
    caption: "Color System Builder",
    dialog: "colorSystemBuilder"
  },
  { imgPath: "images/petangle.jpg", caption: "Petangle", dialog: "petangle" },
  {
    imgPath: "images/sitemap_generator.jpg",
    caption: "Sitemap Generator",
    dialog: "sitemapGenerator"
  }
];

const dialogsMap = {
  petangle: {
    title: "Petangle",
    content: PETANGLE_CONTENT,
    gifPath: "images/gifs/petangle.gif",
    github: GITHUB_PETANGLE,
    url: PETANGLE,
    techStack: "React Firebase"
  },
  sitemapGenerator: {
    title: "Sitemap Generator",
    content: SITEMAP_GENERATOR_CONTENT,
    gifPath: "images/gifs/sitemap_generator.gif",
    github: GITHUB_SITEMAP_GENERATOR,
    url: SITEMAP_GENERATOR,
    techStack: "Javascript Python Flask Heroku"
  },
  colorSystemBuilder: {
    title: "Color System Builder",
    content: COLOR_SYSTEM_BUILDER_CONTENT,
    gifPath: "images/gifs/color_system_builder.gif",
    github: GITHUB_COLOR_SYSTEM_BUILDER,
    url: COLOR_SYSTEM_BUILDER,
    techStack: "React GithubPages"
  }
};

export default function ProjectsPage() {
  return (
    <div>
      <PageTitle text="Projects" name="projects" />
      <Grid
        container
        spacing={5}
        direction="row"
        alignItems="center"
        justify="center"
      >
        {images.map(imgObj => (
          <Grid item key={imgObj.imgPath}>
            <Image
              gifPath={dialogsMap[imgObj.dialog].gifPath}
              title={dialogsMap[imgObj.dialog].title}
              content={dialogsMap[imgObj.dialog].content}
              github={dialogsMap[imgObj.dialog].github}
              url={dialogsMap[imgObj.dialog].url}
              techStack={dialogsMap[imgObj.dialog].techStack}
              imgPath={imgObj.imgPath}
              caption={imgObj.caption}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
