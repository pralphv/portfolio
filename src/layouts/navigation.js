import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { NavigationBar } from "../features";
import Footer from "./footer";

export default function Navigation({ children }) {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        {/* <NavigationBar /> */}
        {children}
      </Grid>
      <Footer />
    </div>
  );
}

Navigation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
