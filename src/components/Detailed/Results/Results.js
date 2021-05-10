import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Detailed from "../Detailed";

function Results(props) {
  const selectedOption_1 =
    props.location.state.selectedOption === "selected_1" ? true : false;
  const optionOnePercentage =
    (props.location.state.optionOneVotes /
      (props.location.state.optionOneVotes +
        props.location.state.optionTwoVotes)) *
    100;
  const optionTwoPercentage =
    (props.location.state.optionTwoVotes /
      (props.location.state.optionOneVotes +
        props.location.state.optionTwoVotes)) *
    100;

  return (
    <div>
      <Detailed dummyLogin={props.location.state.dummyLogin}>
        <br />
        <div>
          <p>
            {selectedOption_1 ? (
              <span>
                <b>Your Choice</b> &#128073; &nbsp;
              </span>
            ) : null}{" "}
            {props.location.state.option1}
          </p>
          <p style={{ fontSize: "small" }}>
            Votes: {props.location.state.optionOneVotes}{" "}
          </p>
          <ProgressBar
            now={optionOnePercentage}
            animated
            variant="warning"
            striped
            label={`${optionOnePercentage}%`}
          />
        </div>
        <br />
        <br />
        <div>
          <p>
            {" "}
            {selectedOption_1 ? null : (
              <span>
                <b>Your Choice</b> &#128073; &nbsp;
              </span>
            )}{" "}
            {props.location.state.option2}
          </p>
          <p style={{ fontSize: "small" }}>
            Votes: {props.location.state.optionTwoVotes}
          </p>
          <ProgressBar
            now={optionTwoPercentage}
            animated
            variant="warning"
            striped
            label={`${optionTwoPercentage}%`}
          />
        </div>
        <br />
        <hr />
        <p>
          Total Votes:{" "}
          {props.location.state.optionOneVotes +
            props.location.state.optionTwoVotes}
        </p>
      </Detailed>
    </div>
  );
}

export default Results;
