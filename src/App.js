import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";

import "./styles.css";
import MainLayout from "./layouts/mainLayout";
import CssBaseline from "@material-ui/core/CssBaseline";

let theme = createMuiTheme({
  palette: {
    type: "dark",
    background: "#151515",
    primary: {
      main: "#797FD0"
    }
    // secondary: {
    // main: "#387adf"
    // }
  }
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
