import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

const Form = (props) => {

  const [currentName, setName] = useState(props.student || "");

  const [currentInterviewer, setInterviewer] = useState(props.interviewer || null);

  const [error, setError] = useState("");

  const reset = () => {
    setName("");
    setInterviewer("null");
  };

  const cancel = () => {
    reset();
    props.onCancel();
  }

  const validate = () => {
    if (currentName === "") {
      setError("Student name cant be blanked");
      return;
    }

    props.onSave(currentName, currentInterviewer)
  }

  return(
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={currentName}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          interviewers={props.interviewers}
          value={currentInterviewer}
          onChange={(event) => setInterviewer(event)}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
        <Button danger onClick={cancel}>Cancel</Button>
        <Button confirm onClick={() => validate(currentName, currentInterviewer) }>Save</Button>
        </section>
      </section>
    </main>
  );
};

export default Form;

// props 
// As part of our Edit story, the <Form> component should take the following props:
// student:String
// interviewer:Number
// interviewers:Array
// onSave:Function
// onCancel:Function

// As part of our Create story, the <Form> component should take the following props:
// interviewers:Array
// onSave:Function
// onCancel:Function