import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css'; // Import custom styles
import { addMonths, startOfMonth, endOfMonth } from 'date-fns';
import { enUS } from 'date-fns/locale';

// Register locale if needed
registerLocale('en-US', enUS);

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();
  const nextMonth = addMonths(today, 1);

  return (
    <div className="calendar-container">
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        startDate={today}
        endDate={endOfMonth(today)}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        calendarClassName="custom-datepicker"
        dayClassName={(date) => "custom-day"}
        // renderCustomHeader={({
        //   monthDate,
        //   customHeaderCount,
        //   decreaseMonth,
        //   increaseMonth,
        // }) => (
        //   <div className="custom-header">
        //     <button
        //       aria-label="Previous Month"
        //       className={'react-datepicker__navigation react-datepicker__navigation--previous'}
        //       style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
        //       onClick={decreaseMonth}
        //     >
        //       {'<'}
        //     </button>
        //     <span>{monthDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span>
        //     <button
        //       aria-label="Next Month"
        //       className={'react-datepicker__navigation react-datepicker__navigation--next'}
        //       style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
        //       onClick={increaseMonth}
        //     >
        //       {'>'}
        //     </button>
        //   </div>
        // )}
      />
    </div>
  );
};

export default Calendar;