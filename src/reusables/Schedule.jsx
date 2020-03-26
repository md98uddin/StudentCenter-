import React from "react";
import '../App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';


const EventCalendar = props => {
    const {currentTab} = props;
    const {
        main
    } = styles;

return currentTab === "View Schedule" ? (
    <div style={main} classname="main">
        <FullCalendar
            defaultView="timeGridWeek"
            plugins={[dayGridPlugin, timeGridPlugin]}
            Height="parent"
            weekends={true}
            minTime="8:00:00"
            maxTime="22:00:00"
            color="red"
            events={[
                {title: "test",
                daysOfWeek: ['1','2','4','5'],
                startTime: '12:00:00',
                endTime: "14:00:00",
                start: "2020-03-24",
                end: "2020-04-04",
                }
            ]}
            />
    </div>
    ): null;
};

const { innerHeight: height, innerWidth: width } = window;
const styles = {
    main: {
        float: "right",
        backgroundColor: "#4e5951",
        height: height / 1.08,
        width: width / 1.92,
        marginRight: width/8,
        color: "#F7E8E8"
        //display: "flex"
      }
};

export default EventCalendar;