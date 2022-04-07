import React from "react";
import Slider from "react-slick";

import mongoBadge from "../assets/mongo-badge.png";
import reactBadge from "../assets/react-badge.png";
import nodeBadge from "../assets/node-badge.png";
import tsBadge from "../assets/ts-badge.png";
import gitBadge from "../assets/git-badge.png";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  img: {
    maxWidth: "100px",
  },
}));

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  const classes = useStyles();

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className={classes.img} src={mongoBadge} />
        </div>
        <div>
          <img className={classes.img} src={nodeBadge} />
        </div>
        <div>
          <img className={classes.img} src={reactBadge} />
        </div>
        <div>
          <img className={classes.img} src={tsBadge} />
        </div>
        <div>
          <img className={classes.img} src={gitBadge} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
