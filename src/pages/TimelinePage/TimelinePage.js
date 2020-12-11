import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

import * as TimelineElements from "./TimelineElements";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "60em"
  }
}));

function CustomVerticalTimelineElement({ date, content: Content, icon: Icon }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#1f1f1f", color: "#fff"}}
      contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
      date={date}
      iconStyle={{ background: "#1f1f1f", color: "#fff" }}
      icon={<Icon />}
    >
      <Content />
    </VerticalTimelineElement>
  );
}

export default function TimelinePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <VerticalTimeline>
      <CustomVerticalTimelineElement
          date="Jun 2018 - Present"
          icon={WorkIcon}
          content={TimelineElements.Segantii}
        />
        <CustomVerticalTimelineElement
          date="Nov 2018 - Jun 2020"
          icon={WorkIcon}
          content={TimelineElements.BankOfAmerica}
        />
        <CustomVerticalTimelineElement
          date="Jul 2017 - Oct 2018"
          icon={WorkIcon}
          content={TimelineElements.ChinaMerchants}
        />
        <CustomVerticalTimelineElement
          date="Sep 2017 - May 2018"
          icon={WorkIcon}
          content={TimelineElements.Shenwan}
        />
        <CustomVerticalTimelineElement
          date="Jul 2017"
          icon={SchoolIcon}
          content={TimelineElements.Graduate}
        />
        <CustomVerticalTimelineElement
          date="Jun 2017"
          icon={SchoolIcon}
          content={TimelineElements.Cfa}
        />

        <CustomVerticalTimelineElement
          date="Jun 2016 - Jun 2017"
          icon={WorkIcon}
          content={TimelineElements.InvestBots}
        />
      </VerticalTimeline>
    </div>
  );
}
