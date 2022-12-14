import React from "react";

import "components/Application.scss";
import "components/Appointment";

import DayList from "./DayList";
import Appointment from "components/Appointment";
import useApplicationData from "hooks/useApplicationData";

import { 
  getAppointmentsForDay, 
  getInterview, 
  getInterviewersForDay 
} from "helpers/selectors";

// Renders Application Page
export default function Application() {
  const {state, bookInterview, cancelInterview, setDay} = useApplicationData();

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const interviewersPerDay = getInterviewersForDay(state, state.day);

  // Loops through appointments and returns the schedule
  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment 
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewersPerDay}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

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
            days={state.days}
            value={state.day}
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
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}