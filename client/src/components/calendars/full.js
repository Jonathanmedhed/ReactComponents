import React, { Fragment, useState } from "react";
import { FullCalendar } from "primereact/fullcalendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarFull = () => {
  const [events, setEvents] = useState([
    {
      id: "a",
      title: "my event",
      start: "2017-02-01",
    },
    {
      id: "b",
      title: "my event",
      start: "2017-02-02",
    },
    {
      id: "d",
      title: "my event",
      start: "2017-02-04",
    },
    {
      id: "f",
      title: "2 day event",
      start: "2017-02-03",
    },
    {
      id: "f",
      title: "2 day event",
      start: "2017-02-03",
    },
    {
      id: "f",
      title: "2 day event",
      start: "2017-02-03",
    },
  ]);

  const [options, setOptions] = useState({
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    defaultView: "dayGridMonth",
    defaultDate: "2017-02-01",
    header: {
      left: "prev,next",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    editable: true,
  });

  return (
    <Fragment>
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>FullCalendar</h1>
          </div>
        </div>

        <div className="content-section implementation">
          <FullCalendar events={events} options={options} />
        </div>
      </div>
    </Fragment>
  );
};
export default CalendarFull;
