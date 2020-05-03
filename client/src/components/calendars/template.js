import React, { Fragment, useState } from "react";
import { Calendar } from "primereact/calendar";

const CalendarTemplate = () => {
  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = month === 0 ? 11 : month - 1;
  let prevYear = prevMonth === 11 ? year - 1 : year;
  let nextMonth = month === 11 ? 0 : month + 1;
  let nextYear = nextMonth === 0 ? year + 1 : year;

  let miniDate = new Date();
  miniDate.setMonth(prevMonth);
  miniDate.setFullYear(prevYear);
  let maxiDate = new Date();
  maxiDate.setMonth(nextMonth);
  maxiDate.setFullYear(nextYear);

  const [date, setDate] = useState(null);
  const [dates, setDates] = useState([]);
  const [minDate, setMinDate] = useState(miniDate);
  const [maxDate, setMaxDate] = useState(maxiDate);
  const [invalidDates, setInvalidDates] = useState([today]);
  const [viewDate, setViewDate] = useState(null);

  let dateTemplate = (date) => {
    if (date.day > 10 && date.day < 15) {
      return (
        <div
          style={{
            backgroundColor: "#1dcbb3",
            color: "#ffffff",
            fontWeight: "bold",
            borderRadius: "50%",
            width: "2em",
            height: "2em",
            lineHeight: "2em",
            padding: 0,
            textAlign: 'center',
          }}
        >
          {date.day}
        </div>
      );
    } else {
      return date.day;
    }
  };

  return (
    <Fragment>
      <div>
        <h3>Date Template</h3>
        <Calendar
          value={date}
          onChange={(e) => setDate(e.value)}
          dateTemplate={dateTemplate}
        />
      </div>
    </Fragment>
  );
};
export default CalendarTemplate;
