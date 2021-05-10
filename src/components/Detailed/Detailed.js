import React from "react";
import classes from "./Detailed.module.css";
import logo from "../../assets/Logo/wouldyouratherlogo.jpg";
import arrow from "../../assets/BackArrow/back-arrow.png";
import { Link } from "react-router-dom";

function Detailed(props) {
  return (
    <div className={classes.frame}>
      <div className={classes.back_boundry}>
        <Link to="/">
          {" "}
          <img className={classes.back} src={arrow} alt="arrow" />
        </Link>
      </div>
      <div className={classes.top_section}>
        <img className={classes.one} src={logo} alt="logo" />
        <p className={classes.two}>
          {" "}
          <b>{props.dummyLogin}</b>
        </p>
        <p className={classes.three}>Would You Rather</p>
      </div>
      <br />
      <hr />
      <div>{props.children}</div>
    </div>
  );
}

export default Detailed;
