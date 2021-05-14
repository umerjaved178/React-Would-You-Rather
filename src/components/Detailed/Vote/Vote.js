import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Detailed from "../Detailed";
import classes from "./Vote.module.css";
import {
  voteHandler,
  firebaseDataFetch,
} from "../../../redux/slices/EntirePoolSlice";
import { Redirect } from "react-router";

function Vote(props) {
  const [selectedOption, setselectedOption] = useState("");
  const [disbale, setdisbale] = useState(true);
  const moveToHome = useSelector((state) => state.EntirePool.moveToHome);
  const dispatch = useDispatch();

  const onValueChange = (e) => {
    setselectedOption(e.target.value);
    setdisbale(false);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      voteHandler({
        id: props.location.state.id,
        selectedOption: selectedOption,
        voter: props.location.state.dummyLogin,
        history: props.history,
      })
    );
    dispatch(firebaseDataFetch());
    // props.history.push("/");
  };

  let votingdisplay = (
    <Detailed dummyLogin={props.location.state.dummyLogin}>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>
            <input
              type="radio"
              name="radioInput"
              onChange={onValueChange}
              value="optionOne"
            />{" "}
            {props.location.state.option1}{" "}
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="radioInput"
              onChange={onValueChange}
              value="optionTwo"
            />{" "}
            {props.location.state.option2}{" "}
          </label>
        </div>
        <button type="submit" disabled={disbale}>
          Submit
        </button>
      </form>
    </Detailed>
  );
  if (moveToHome) {
    votingdisplay = <Redirect to="/" />;
  }

  return (
    <div className={classes}>
      {console.log("Move to Home Page: ", moveToHome)}
      {votingdisplay}
    </div>
  );
}

export default Vote;
