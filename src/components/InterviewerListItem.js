import React      from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss";

// Return the interviewer from the list of interviewers
const InterviewerListItem = (props) => {

  const interviewListItemClasses = classNames(
    "interviewers__item", {
    "interviewers__item--selected": props.selected
    }
  )

  return (
    <li className={interviewListItemClasses} onClick={props.setInterviewer}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
};

export default InterviewerListItem;

