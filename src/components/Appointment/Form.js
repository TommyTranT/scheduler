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
  }

  return(
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            /*
              This must be a controlled component
              your code goes here
            */
          />
        </form>

      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
        <Button danger onClick={props.onCancel}>Cancel</Button>
        <Button confirm onClick={props.onSave}>Save</Button>
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