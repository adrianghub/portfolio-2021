import React, { useEffect, useState } from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import SectionContainer from "./SectionContainer";
import { fetchProjects } from "../api/gh-repos";
import { GitHub, Code, DesktopWindows } from "@material-ui/icons";
import CustomIconButton from "../components/CustomIconButton";
import { socialMedia } from "../data";

import projectsIcon from "../assets/projects.svg";
import ProjectCards from "../components/ProjectCards";

const useStyles = makeStyles(() => ({
  commercialProjectsContainer: {
    padding: "8rem 2rem 10rem",
  },
  personalProjectsContainer: {
    width: "100%",
    margin: "0 auto",
    padding: "6rem 0 3rem",
  },
  project: {
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
  },
  codeLanguage: {
    position: "absolute",
    top: "15px",
    left: "100px",
    margin: "4px 8px",
  },
}));

const Projects = () => {
  const classes = useStyles();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function fetchedData() {
      const response = await fetchProjects();
      setData(response?.data);
    }
    fetchedData();
  }, []);

  interface GithubRepoPros {
    description: string;
    image: string;
    language: string;
    languageColor: string;
    link: string;
    repo: string;
    website: string;
  }

  const reposInfo = data?.map(
    (
      {
        description,
        language,
        languageColor,
        link,
        repo,
        website,
      }: GithubRepoPros,
      id: string
    ) => {
      return (
        <Grid item xs={12} key={id}>
          <Card elevation={8} className={classes.project}>
            <CardHeader
              title={repo}
              action={
                <CustomIconButton
                  icon={GitHub}
                  m={1}
                  href={socialMedia.githubHref}
                />
              }
            />
            <CardContent>
              <Typography variant="body2">
                {description ? description : "No description 😥"}
              </Typography>
            </CardContent>
            <CardActions disableSpacing style={{ position: "relative" }}>
              <CustomIconButton icon={DesktopWindows} m={1} href={website} />
              <CustomIconButton icon={Code} m={1} href={link} />
              <p
                className={classes.codeLanguage}
                style={{ color: languageColor }}
              >
                {language}
              </p>
            </CardActions>
          </Card>
        </Grid>
      );
    }
  );

  return (
    <SectionContainer
      id="projects"
      title="Projects"
      icon={projectsIcon}
      maxWidth="md"
    >
      <Typography align="center" variant="h5" component="h3">
        Featured Commercial Projects
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        className={classes.commercialProjectsContainer}
      >
        <ProjectCards />
      </Grid>

      <Typography align="center" variant="h5" component="h3">
        Featured Personal Projects
      </Typography>
      <Grid
        container
        spacing={8}
        alignItems="center"
        className={classes.personalProjectsContainer}
      >
        {reposInfo}
      </Grid>
    </SectionContainer>
  );
};

export default Projects;
