import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import type { ClassNameMap } from "@material-ui/styles";
import {
  Grid,
  Typography,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core/";
import { projectCards } from "../data";

const useStyles = makeStyles((theme: Theme) => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  cardWrapper: {
    maxWidth: 370,
    marginBottom: 0,

    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "100%",
      justifyContent: "center",
      marginBottom: "2rem",
    },
  },
  card: {
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
  },
}));

interface ProjectCardProps {
  classes: ClassNameMap<"actionArea" | "cardWrapper" | "card">;
  link: string;
  image: string;
  title: string;
  subtitle: string;
}

const ProjectCard = ({
  classes,
  link,
  image,
  title,
  subtitle,
}: ProjectCardProps) => (
  <CardActionArea
    className={classes.actionArea}
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    <Card className={classes.card}>
      <CardMedia image={image} />
      <CardContent>
        <Typography color="primary" variant={"h4"}>
          {title}
        </Typography>
        <Typography>{subtitle}</Typography>
      </CardContent>
    </Card>
  </CardActionArea>
);

export const ProjectCards = () => {
  const styles = useStyles();

  return (
    <>
      {projectCards.map(({ id, title, subtitle, link, image }) => (
        <Grid
          key={id}
          item
          xs={12}
          md={6}
          lg={4}
          className={styles.cardWrapper}
        >
          <ProjectCard
            key={id}
            classes={styles}
            title={title}
            subtitle={subtitle}
            link={link}
            image={image}
          />
        </Grid>
      ))}
    </>
  );
};

export default ProjectCards;
