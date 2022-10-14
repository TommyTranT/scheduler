export function getAppointmentsForDay(state, day) {

  
  // First check what appoinments are on day, if none return empty array
  let onDay = state.days.filter(d => d.name === day)[0];
  if(!onDay) {
   return [];
  }

  let result = [];

//next we compare the appointment Id and push detials to the result 
  for(const id of onDay.appointments) {
    const appointmentObj = state.appointments[id];
  
    result.push(appointmentObj);
  }
  return result

}