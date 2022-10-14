import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "./DayList";
import "components/Appointment"
import Appointment, { appointments } from "components/Appointment";
import axios from "axios";


export default function Application(props) {

  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState([]);


  useEffect(() => {

    Promise.all();

   
    axios.get('/api/days')
    .then(response => {
      console.log("data has come back");
      console.log(response.data);
      setDays(response.data)
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response.headers);
      console.log(error.response.data);
    });
  },[])

useEffect(() => {
  axios.get('/api/appointments')
  .then(response => {
    console.log("Appointments");
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.response.status);
    console.log(error.response.headers);
    console.log(error.response.data);
  });
},[])

// Change this so that it takes in the info from axios call
const schedule = Object.values(appointments).map((appointment) => {
  return (
    <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={appointment.interview}
    />
  )
})

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={days}
            value={day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule"> 
        {schedule}
      </section>
    </main>
  );
}
