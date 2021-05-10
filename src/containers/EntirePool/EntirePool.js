import React, { useEffect, useState } from "react";
import SinglePoll from "../../components/SinglePoll/SinglePoll";
import classes from "./EntirePool.module.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  firebaseDataFetch,
  toggleAnswer,
} from "../../redux/slices/EntirePoolSlice";

function EntirePool() {
  const questions = useSelector((state) => state.EntirePool.fetchedData);
  const answered = useSelector((state) => state.EntirePool.answered);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(firebaseDataFetch());
  }, []);

  const toggleAnswered = () => {
    if (answered) return;
    dispatch(toggleAnswer());
  };
  const toggleUnAnswered = () => {
    if (!answered) return;
    dispatch(toggleAnswer());
  };

  const dummyLogin = "johndoe";
  // sarahedo johndoe
  let resultButton = answered ? "Results" : "Vote";

  let displayContent = <Spinner />;
  if (questions) {
    var filteredQuestions = questions.filter(
      (singleObject) =>
        (singleObject.optionOne.votes
          ? singleObject.optionOne.votes.includes(dummyLogin)
          : false) |
        (singleObject.optionTwo.votes
          ? singleObject.optionTwo.votes.includes(dummyLogin)
          : false)
    );

    if (!answered) {
      filteredQuestions = questions.filter(
        (singleObject) =>
          (singleObject.optionOne.votes
            ? !singleObject.optionOne.votes.includes(dummyLogin)
            : true) &&
          (singleObject.optionTwo.votes
            ? !singleObject.optionTwo.votes.includes(dummyLogin)
            : true)
      );
    }

    displayContent = React.Children.toArray(
      filteredQuestions.map((question) => (
        <SinglePoll
          id={question.id}
          dummyLogin={dummyLogin}
          author={question.author}
          optionOne={question.optionOne.text}
          optionTwo={question.optionTwo.text}
          optionOneVotes={
            question.optionOne.votes ? question.optionOne.votes.length : 0
          }
          optionTwoVotes={
            question.optionTwo.votes ? question.optionTwo.votes.length : 0
          }
          resultButton={resultButton}
          selectedOption={
            question.optionOne.votes &&
            question.optionOne.votes.includes(dummyLogin)
              ? "selected_1"
              : "selected_2"
          }
        />
      ))
    );
  }

  return (
    <div className={classes.EntirePool}>
      {/* {console.log(newAPICall)} */}
      <div className={classes.Headers} tabIndex="1" onClick={toggleAnswered}>
        {" "}
        Anwsered{" "}
      </div>{" "}
      |{" "}
      <div className={classes.Headers} tabIndex="1" onClick={toggleUnAnswered}>
        {" "}
        Unanwsered{" "}
      </div>
      <div className={classes.TableArea}>{displayContent}</div>
    </div>
  );
}

export default EntirePool;
