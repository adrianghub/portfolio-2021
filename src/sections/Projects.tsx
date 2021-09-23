import React, { useEffect, useState } from "react";
import { useTheme, Grid, makeStyles } from "@material-ui/core";
import SectionContainer from "./SectionContainer";
import { fetchProjects } from "../api/gh-repos";

const useStyles = makeStyles(() => ({
  gridItemWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Projects = () => {
  const classes = useStyles();
  const theme = useTheme();
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
      const repoInfo = <p key={id}> {name}</p>;
      return repoInfo;
    }
  );

  return (
    <SectionContainer id="projects" title="Projects" maxWidth="md">
      <Grid container spacing={0} alignItems="center" style={{ width: "100%" }}>
        <Grid
          item
          xs={12}
          md={6}
          className={classes.gridItemWrapper}
          style={{ flexDirection: "column", alignItems: "space-around" }}
        >
          {reposInfo}
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default Projects;
