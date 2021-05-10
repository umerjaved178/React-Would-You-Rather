import React, { useEffect, useState } from "react";
import axios from "../../axios-instance";
import SinglePerson from "./SinglePerson/SinglePerson";
import Spinner from "../UI/Spinner/Spinner";
import classes from "./LeaderBoard.module.css";
import { useSelector } from "react-redux";

function LeaderBoard() {
  const questions = useSelector((state) => state.EntirePool.fetchedData);

  let leaderStats = {};
  for (let question in questions) {
    let authorName = questions[question]["author"];
    let votedOne = questions[question]["optionOne"]["votes"];
    let votedTwo = questions[question]["optionTwo"]["votes"];

    if (!(authorName in leaderStats)) {
      leaderStats[authorName] = {
        asked: 1,
        voted: 0,
      };
    } else if (authorName in leaderStats) {
      leaderStats[authorName]["asked"]++;
    }
    if (votedOne) {
      for (let votee of votedOne) {
        if (votee) {
          leaderStats[votee]["voted"]++;
        }
      }
    }
    if (votedTwo) {
      for (let votee of votedTwo) {
        if (votee) {
          leaderStats[votee]["voted"]++;
        }
      }
    }
  }

  Object.keys(leaderStats).sort(
    (a, b) =>
      parseInt(leaderStats[b]["asked"] + parseInt(leaderStats[b]["voted"])) -
      parseInt(leaderStats[a]["asked"] + parseInt(leaderStats[a]["voted"]))
  );

  let displayContent = <Spinner />;
  if (leaderStats) {
    displayContent = React.Children.toArray(
      Object.keys(leaderStats).map((key) => (
        <SinglePerson
          author={key}
          asked={leaderStats[key]["asked"]}
          voted={leaderStats[key]["voted"]}
        />
      ))
    );
  }

  return (
    <div>
      <h1 className={classes.Heading}>Leaders</h1>
      {displayContent}
    </div>
  );
}

export default LeaderBoard;
