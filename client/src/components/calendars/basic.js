import React, { Fragment, useState } from "react";
import { ButtonModule } from "primereact/button";
import { Calendar } from "primereact/calendar";

const CalendarBasic = () => {
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

  return (
    <Fragment>
      <div>
        <h3>Basic</h3>
        <Calendar value={date} onChange={(e) => setDate(e.value)}></Calendar>
      </div>
    </Fragment>
  );
};
export default CalendarBasic;
