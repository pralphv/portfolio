import React from "react";

import Grid from "@material-ui/core/Grid";
import { Image, PageTitle } from "../../features";
import {
  GITHUB_PETANGLE,
  GITHUB_SITEMAP_GENERATOR,
  GITHUB_COLOR_SYSTEM_BUILDER,
  GITHUB_HKPORTFOLIOANALYSIS,
  GITHUB_LOL_15_FF,
  GITHUB_ENSOU,
  GITHUB_BUDDY_CHAMP,
  PETANGLE,
  SITEMAP_GENERATOR,
  COLOR_SYSTEM_BUILDER,
  HKPORTFOLIOANALYSIS,
  ENSOU,
  BUDDY_CHAMP,
} from "../../constants";
import {
  PETANGLE_CONTENT,
  COLOR_SYSTEM_BUILDER_CONTENT,
  SITEMAP_GENERATOR_CONTENT,
  HKPORTFOLIOANALYSIS_CONTENT,
  LOL_15_FF_CONTENT,
  ENSOU_CONTENT,
  BUDDY_CHAMP_CONTENT,
} from "./constants";

const images = [
  {
    imgPath: "images/ensou.jpg",
    caption: "Ensou",
    dialog: "ensou",
  },
  {
    imgPath: "images/buddy_champ.JPG",
    caption: "Buddy Champ JJ",
    dialog: "buddychampjj",
  },
  {
    imgPath: "images/gifs/lol_15_ff.jpg",
    caption: "Lol 15ff",
    dialog: "lol15ff",
  },
  {
    imgPath: "images/gifs/hkportfolioanalysis.jpg",
    caption: "HK Portfolio Analysis",
    dialog: "hkportfolioanalysis",
  },
  {
    imgPath: "images/color_system_builder.jpg",
    caption: "Color System Builder",
    dialog: "colorSystemBuilder",
  },
  { imgPath: "images/petangle.jpg", caption: "Petangle", dialog: "petangle" },
  {
    imgPath: "images/sitemap_generator.jpg",
    caption: "Sitemap Generator",
    dialog: "sitemapGenerator",
  },
];

const dialogsMap = {
  buddychampjj: {
    title: "Buddy Champ JJ",
    content: BUDDY_CHAMP_CONTENT,
    gifPath: "images/buddy_champ.JPG",
    github: GITHUB_BUDDY_CHAMP,
    url: BUDDY_CHAMP,
    techStack: "Python Firebase React",
  },
  lol15ff: {
    title: "Lol 15ff",
    content: LOL_15_FF_CONTENT,
    gifPath: "images/gifs/lol_15_ff.jpg",
    github: GITHUB_LOL_15_FF,
    url: null,
    techStack: "Python Pandas Flask scikit-learn HTML JavaScript Heroku",
  },
  hkportfolioanalysis: {
    title: "HK Portolio Analysis",
    content: HKPORTFOLIOANALYSIS_CONTENT,
    gifPath: "images/gifs/hkportfolioanalysis.jpg",
    github: GITHUB_HKPORTFOLIOANALYSIS,
    url: HKPORTFOLIOANALYSIS,
    techStack: "React Firebase Python Pandas FastAPI Heroku",
  },
  petangle: {
    title: "Petangle",
    content: PETANGLE_CONTENT,
    gifPath: "images/gifs/petangle.gif",
    github: GITHUB_PETANGLE,
    url: PETANGLE,
    techStack: "React Firebase Python Flask Heroku",
  },
  sitemapGenerator: {
    title: "Sitemap Generator",
    content: SITEMAP_GENERATOR_CONTENT,
    gifPath: "images/gifs/sitemap_generator.gif",
    github: GITHUB_SITEMAP_GENERATOR,
    url: SITEMAP_GENERATOR,
    techStack: "Javascript Python Flask Heroku",
  },
  colorSystemBuilder: {
    title: "Color System Builder",
    content: COLOR_SYSTEM_BUILDER_CONTENT,
    gifPath: "images/gifs/color_system_builder.gif",
    github: GITHUB_COLOR_SYSTEM_BUILDER,
    url: COLOR_SYSTEM_BUILDER,
    techStack: "TypeScript Firebase GithubPages",
  },
  ensou: {
    title: "Ensou",
    content: ENSOU_CONTENT,
    gifPath: "images/gifs/ensou.gif",
    github: GITHUB_ENSOU,
    url: ENSOU,
    techStack: "TypeScript Firebase AWS Lambda",
    youtubeUrl: "https://www.youtube.com/watch?v=Jj1ZJEFVpMk",
  },
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
        style={{ maxWidth: "900px" }}
      >
        {images.map((imgObj) => (
          <Grid item key={imgObj.imgPath}>
            <Image
              gifPath={dialogsMap[imgObj.dialog].gifPath}
              title={dialogsMap[imgObj.dialog].title}
              content={dialogsMap[imgObj.dialog].content}
              github={dialogsMap[imgObj.dialog].github}
              url={dialogsMap[imgObj.dialog].url}
              techStack={dialogsMap[imgObj.dialog].techStack}
              youtubeUrl={dialogsMap[imgObj.dialog].youtubeUrl}
              imgPath={imgObj.imgPath}
              caption={imgObj.caption}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
