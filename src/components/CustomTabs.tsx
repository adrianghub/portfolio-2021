import React, { ChangeEvent, useState } from "react";
import {
  makeStyles,
  Tabs,
  Tab,
  Typography,
  Box,
  Link,
  useTheme,
  useMediaQuery,
  Theme,
} from "@material-ui/core";
import { jobsExperience } from "../data/data";
import CustomIconButton from "./CustomIconButton";
import { Language } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    // @ts-ignore
    backgroundColor: theme.palette.background.main,
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: (props: any) => (props.isMobile ? "column" : "row"),
  },
  //@ts-ignore
  tabs: {
    borderRight: (props: any) =>
      props.isMobile ? "none" : `1px solid ${theme.palette.primary.main}`,
    borderBottom: (props: any) =>
      !props.isMobile ? "none" : `1px solid ${theme.palette.primary.main}`,
    width: (props: any) => (props.isMobile ? "inherit" : "200px"),
    maxWidth: (props: any) => (props.isMobile ? "inherit" : "200px"),
    minWidth: (props: any) => (props.isMobile ? "inherit" : "200px"),
  },
  indicator: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

interface JobExperience {
  id: number;
  position: string;
  period: string;
  company: string;
  overview: string;
  website: string;
}

let initialIndex = jobsExperience.length - 1;

const CustomTabs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles({ isMobile });
  const [value, setValue] = useState(initialIndex);

  const handleChange = (
    event: ChangeEvent<{}>,
    newValue: React.SetStateAction<number>
  ) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        classes={{ indicator: classes.indicator }}
        centered
      >
        {jobsExperience.map((elem) => (
          <Tab label={elem.company} key={elem.id} />
        ))}
      </Tabs>
      {jobsExperience.map((elem: JobExperience) => (
        <TabPanel value={value} index={elem.id} key={elem.id}>
          <Box mb={4}>
            <Typography variant="h5">
              {elem.position} @{" "}
              <Link href={elem.website} color="primary">
                {elem.company}
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {elem.period}
            </Typography>
          </Box>
          <Box mb={4}>
            <Typography variant="body1" color="textPrimary">
              {elem.overview}
            </Typography>
          </Box>
          <Box>
            {elem.website && (
              <CustomIconButton
                icon={Language}
                fontSize={28}
                m={1}
                href={elem.website}
              />
            )}
          </Box>
        </TabPanel>
      ))}
    </div>
  );
};

interface TabPanelProps {
  children: JSX.Element | JSX.Element[];
  value: number;
  index: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} minHeight={isMobile ? 0 : "350px"}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

export default CustomTabs;
