import React      from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss";

const InterviewerListItem = (props) => {

  const interviewListItemClasses = classNames(
    "interviewers__item", {
    "interviewers__item--selected": props.selected
    }
  )

  return (
    <li 
      className={interviewListItemClasses}
      onClick={props.setInterviewer}
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

// Props for interviewlist
// const interviewer = {
//   id: 1,
//   name: "Sylvia Palmer",
//   avatar: "https://i.imgur.com/LpaY82x.png"
// };