import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Icon, PageTitle } from "../../features";
import { IMG_DIR_PATH } from "./constants";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiPython,
  DiMsqlServer,
  DiPostgresql,
  DiMongodb,
  DiReact,
  DiRedis,
  DiPhotoshop,
  DiDjango,
  DiGithubBadge,
  DiHeroku
} from "react-icons/di";
import { SiFlask, SiFirebase, SiTypescript, SiGitlab, SiRedux } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const frontEndIcons = [
  { isIcon: true, icon: DiHtml5 },
  { isIcon: true, icon: DiCss3 },
  { isIcon: true, icon: DiJavascript1 },
  { isIcon: true, icon: SiTypescript },
  { isIcon: true, icon: DiReact },
  { isIcon: true, icon: SiRedux },
];

const backEndIcons = [
  { isIcon: true, icon: DiPython },

  {
    imgPath: `${IMG_DIR_PATH}pandas_secondary.svg`,
    useBg: true,
  },
  {
    imgPath: `${IMG_DIR_PATH}numpy.png`,
    useBg: false,
  },
  { isIcon: true, icon: SiFlask },
  { isIcon: true, icon: DiDjango },
];

const dbIcons = [
  { isIcon: true, icon: DiPostgresql },
  { isIcon: true, icon: DiMsqlServer },
  { isIcon: true, icon: DiMongodb },
  { isIcon: true, icon: DiRedis },
];

const toolIcons = [
  { isIcon: true, icon: SiGitlab },
  { isIcon: true, icon: DiGithubBadge },
  { isIcon: true, icon: SiFirebase },
  { isIcon: true, icon: FaAws },
  { isIcon: true, icon: DiHeroku },
];

const miscIcons = [{ isIcon: true, icon: DiPhotoshop }];

export default function TechStackPage() {
  const allIcons = [frontEndIcons, backEndIcons, dbIcons, toolIcons, miscIcons];
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
          {images.map((imgObj) => {
            return imgObj.isIcon ? (
              <imgObj.icon size="5em" />
            ) : (
              <Grid item key={imgObj.imgPath}>
                <Icon imgPath={imgObj.imgPath} useBg={imgObj.useBg} />
              </Grid>
            );
          })}
        </Grid>
      ))}
    </div>
  );
}
