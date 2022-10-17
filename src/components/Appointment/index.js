// import React, { Fragment } from "react";

// import "components/Appointment/styles.scss";
// import Header from "./Header";
// import Show from "./Show";
// import Empty from "./Empty";

// export const appointments = {
//   1: {
//     id: 1,
//     time: "12pm",
//   },
//   2: {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       },
//     },
//   },
//   3: {
//     id: 3,
//     time: "2pm",
//   },
//   4: {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer: {
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       },
//     },
//   },
//   5: {
//     id: 5,
//     time: "4pm",
//   },
// };
// const Appointment = (props) => {
//   return (
//     <article className="appointment">
//       <Header time={props.time}></Header>
//       {props.interview ? (
//         <Show
//           id={props.id}
//           student={props.interview.student}
//           interviewer={props.interview.interviewer}
//         />
//       ) : (
//         <Empty />
//       )}
//     </article>
//   );
// };

// export default Appointment;


import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";


  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(() => {
      transition(SHOW)
    }).catch(() => {
      transition(ERROR_SAVE, true)
    })
  }

  function cancel(id) {
    transition(DELETING, true);
    props.cancelInterview(id).then(() => {
      transition(EMPTY);
    }).catch(() => {
      transition(ERROR_DELETE, true)
    })
  }

  return (
    <article className="appointment" data-testid="appointment">

      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === CREATE && <Form 
        student={props.interview ? props.interview.student : ""}
        interviewer={props.interview ? props.interview.interviewer.id : null}
        interviewers={props.interviewers}  
        onSave={save} 
        onCancel={() => back()}
      />}

      {mode === SHOW && props.interview && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(CREATE)}
        />
      )}

      {mode === SAVING && <Status message="Saving..." />}

      {mode === CONFIRM && <Confirm 
        message="Are you sure you would like to delete?" 
        onCancel={back} 
        onConfirm={() => cancel(props.id)}
      />}

      {mode === DELETING && <Status message="Deleting..." />}

      {mode === ERROR_DELETE && <Error message="Unable to delete" onClose={back}/>}

      {mode === ERROR_SAVE && <Error message="Unable to save" onClose={back} />}


    </article>
  );
};