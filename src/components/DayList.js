import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {

  // const oneDay = props.days[0];

  // Looping through all days, pulling out the required keys to give to DayListItem to render
  const allDay = props.days.map(day => {
    return(
      <DayListItem 
        key={day.id}
        name={day.name} 
        spots={day.spots} 
        selected={day.name === props.value}
        setDay={props.onChange}  
      />
    )
  })

  return(
    <ul>
      {allDay}
    </ul>
  );
};


