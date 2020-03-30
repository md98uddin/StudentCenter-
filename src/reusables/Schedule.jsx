import React from "react";
import "../App.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

const EventCalendar = props => {
  const { currentTab } = props;
  const { main } = styles;

  return currentTab === "View Schedule" ? (
    <div style={main} className="main">
      <FullCalendar
        defaultView="timeGridWeek"
        plugins={[dayGridPlugin, timeGridPlugin]}
        height={window.innerHeight / 1.17}
        weekends={true}
        minTime="8:00:00"
        maxTime="24:00:00"
        eventColor="#4d0917"
        eventBackgroundColor="#4d0917"
        events={[
          {
            title: "test",
            daysOfWeek: ["1", "2", "4", "5"],
            startTime: "12:00:00",
            endTime: "14:00:00",
            start: "2020-03-24",
            end: "2020-04-04"
          }
        ]}
      />
    </div>
  ) : null;
};

const { innerHeight: height, innerWidth: width } = window;
const styles = {
  main: {
    float: "right",
    backgroundColor: "#9e151e",
    height: height / 1.17,
    width: width / 1.92,
    marginRight: width / 8,
    color: "#ffffff",
    border: "solid",
    borderColor: "#000000",
    marginTop: height / 18
  }
};

export default EventCalendar;
