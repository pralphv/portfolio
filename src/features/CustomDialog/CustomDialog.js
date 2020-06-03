import React, { useState } from "react";
import PropTypes from "prop-types";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

import { MuiIcon } from "../../features";
import { openNewTab } from "../../utils";
import { GITHUB_PETANGLE, PETANGLE } from "../../constants";

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const useStyles = makeStyles((theme) => ({
  gif: {
    height: "auto",
    width: "100%",
    padding: theme.spacing(1),
    maxHeight: "217px",
  },
  techStack: {
    fontWeight: 300,
    wordSpacing: "2em",
    color: "#9b9ac5",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

export default function CustomDialog({
  gifPath,
  title,
  content,
  github,
  url,
  techStack,
  open,
  handleClose,
}) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  const textWidth = isMobile ? 12 : 6;
  const gifWidth = isMobile ? 12 : 6;

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        style: {
          backgroundColor: "#212121",
          boxShadow: "none",
        },
      }}
    >
      <DialogContent>
        <Typography gutterBottom variant="h4">
          {title}
        </Typography>
        <Grid container spacing={2} direction="row">
          <Grid item xs={textWidth}>
            <Typography>{content} </Typography>
            <Typography className={classes.techStack}>{techStack}</Typography>
            <Grid container spacing={2} direction="row">
              <Grid item>
                <MuiIcon
                  iconComponent={GitHubIcon}
                  onClick={() => openNewTab(github)}
                />
              </Grid>
              {url && (
                <Grid item>
                  <MuiIcon
                    iconComponent={LinkIcon}
                    onClick={() => openNewTab(url)}
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={gifWidth}>
            <img className={classes.gif} src={gifPath} alt={gifPath} />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

CustomDialog.propTypes = {
  gifPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string,
  techStack: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
