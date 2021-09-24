import React, { useEffect, useState } from "react";
import {
  useTheme,
  Grid,
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import SectionContainer from "./SectionContainer";
import { fetchProjects } from "../api/gh-repos";

const useStyles = makeStyles(() => ({
  projectContainer: {
    overflow: "visible",
    width: "100%",
    margin: "0 auto",
  },
  project: {
    overflow: "visible",
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
    html_url: string;
    name: string;
    homepage: string;
    id: string;
  }

  const reposInfo = data?.map(
    ({ description, html_url, name, homepage, id }: GithubRepoPros) => {
      return (
        <Grid item xs={12} md={6} className={classes.project}>
          <Card elevation={10} id={id}>
            <CardHeader title={name}></CardHeader>
            <CardContent>
              <Typography variant="body2">
                {description ? description : "No description 😥"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    }
  );

  return (
    <SectionContainer id="projects" title="Projects" maxWidth="md">
      <Grid
        container
        spacing={4}
        alignItems="center"
        className={classes.projectContainer}
      >
        {reposInfo}
      </Grid>
    </SectionContainer>
  );
};

export default Projects;
