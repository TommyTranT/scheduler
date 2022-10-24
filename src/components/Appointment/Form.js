import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

// Returns our Form view 
const Form = (props) => {

  const [currentName, setName] = useState(props.student || "");
  const [currentInterviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  // Reset input fields
  const reset = () => {
    setName("");
    setInterviewer("null");
  };

  // Cancel the process of filling out form
  const cancel = () => {
    reset();
    props.onCancel();
  }

  // Checks to see if student name and interviewer are selected
  const validate = () => {
    if (currentName === "") {
      setError("student name cannot be blank");
      return;
    }
    if (!currentInterviewer) {
      setError("please select an interviewer")
      return;
    }
    if (error) {
      setError("");
      return;
    }

    return props.onSave(currentName, currentInterviewer);
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
