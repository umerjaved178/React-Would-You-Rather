import React from "react";
import Button from "../UI/Button/Button";
import profilepic from "../../assets/Logo/wouldyouratherlogo.jpg";
import classes from "./SinglePoll.module.css";
import { Link } from "react-router-dom";

function SinglePoll(props) {
  let detailURL = props.resultButton === "Results" ? "/results" : "vote";

  return (
    <div className={classes.SinglePoll}>
      <div>
        <img className={classes.item_1} src={profilepic} alt="profilepic" />
      </div>
      <div className={classes.item_2}>
        <h1>Would you rather</h1>
        <p>
          Option 1: <b> {props.optionOne} </b>{" "}
        </p>
        <p>or</p>
        <p>
          Option 2: <b> {props.optionTwo} </b>{" "}
        </p>

        <p className={classes.author}>By: {props.author}</p>
        <Link
          to={{
            pathname: detailURL,
            state: {
              id: props.id,
              option1: props.optionOne,
              option2: props.optionTwo,
              optionOneVotes: props.optionOneVotes,
              optionTwoVotes: props.optionTwoVotes,
              dummyLogin: props.dummyLogin,
              selectedOption: props.selectedOption,
              voteHandler2: props.voteHandler2,
            },
          }}
        >
          <Button>{props.resultButton}</Button>
        </Link>
      </div>
    </div>
  );
}

export default SinglePoll;
