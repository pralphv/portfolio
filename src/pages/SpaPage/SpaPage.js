import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import LazyLoad from "react-lazyload";
import {
  LandingPage,
  ProjectsPage,
  TechStackPage,
  AboutMePage,
  ContactMePage
} from "../../pages";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2)
  }
}));

function DividerSpaced() {
  const classes = useStyles();
  return <Divider className={classes.root} />;
}

function WrappedlazyComponent({ component: Component }) {
  return (
    <LazyLoad throttle={200} height={500} once>
      <CSSTransition
        appear
        classNames="lazy"
        unmountOnExit
        timeout={300}
        in={true}
      >
        <Component />
      </CSSTransition>
    </LazyLoad>
  );
}

const pageOrder = [
  LandingPage,
  ProjectsPage,
  TechStackPage,
  AboutMePage,
  ContactMePage
];

export default function SpaPage() {
  return (
    <div>
      {pageOrder.map((component, i) => (
        <div key={i}>
          <WrappedlazyComponent component={component} />
          <DividerSpaced />
        </div>
      ))}
    </div>
  );
}
