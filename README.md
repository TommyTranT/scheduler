# Interview Scheduler
A react app that allows users to set an appointment with an interviewer of thier choice between Monday and Friday.

Users can edit or delete the appointment once its made. 

## Behavioral Expectations
- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Screenshots

![Adding my name and the interviewer of my choice](https://github.com/haitran1995/scheduler/blob/master/public/images/screenshots/Screen%20Shot%202022-10-17%20at%204.14.37%20AM.png?raw=true)

![My appointment is now shown in the scheduler](https://github.com/haitran1995/scheduler/blob/master/public/images/screenshots/Screen%20Shot%202022-10-17%20at%204.14.57%20AM.png?raw=true)

![Edit my appointment to have a different interviewer](https://github.com/haitran1995/scheduler/blob/master/public/images/screenshots/Screen%20Shot%202022-10-17%20at%204.15.52%20AM.png?raw=true)

![Deleting my appointment](https://github.com/haitran1995/scheduler/blob/master/public/images/screenshots/Screen%20Shot%202022-10-17%20at%204.15.16%20AM.png?raw=true)

## Technical Specifications
React
Webpack, Babel
Axios, WebSockets
Axios
Storybook, Webpack Dev Server, Jest, Testing 

## Setup

Install dependencies with `npm install`.

## Install scheduler-api

Scheduler requires 'scheduler-api' to be running along side the web server.

[Click here](https://web.compass.lighthouselabs.ca/696c1dc0-f804-4203-a94c-a174d8ed6093) to setup the API Server

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
