import React from "react";
import classes from "./SinglePerson.module.css";

function SinglePerson(props) {
  return (
    <div className={classes.Person}>
      <h4>{props.author}</h4>
      <h5>
        Score:{" "}
        <span className={classes.Number1}>{props.asked + props.voted}</span>
      </h5>
      <hr />
      <div style={{ overflow: "hidden" }}>
        <p style={{ float: "left", marginLeft: "200px" }}>
          Asked: <span className={classes.Number2}>{props.asked}</span>
        </p>
        <p style={{ float: "right", marginRight: "200px" }}>
          Answered: <span className={classes.Number3}>{props.voted}</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default SinglePerson;
