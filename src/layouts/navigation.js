import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
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
