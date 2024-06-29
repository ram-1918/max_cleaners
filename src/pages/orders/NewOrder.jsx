import DatePicker from 'react-datepicker';
import { startOfMonth, endOfMonth, addMonths } from 'date-fns';
// import Calendar from '../../components/Calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentActiveDate } from '../../state/slice';

export const month_mapper = {
  0: 'january', 1: 'february', 2: 'march', 3: 'april', 4: 'may',
  5: 'june', 6: 'july', 7: 'august', 8: 'september', 9: 'october',
  10: 'november', 11: 'december'
}

export default function NewOrder() {

  const today = new Date();
  const initial_date_value = {
    selectedDate: today,
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDate()
  }
    const [selectedDate, setSelectedDate] = useState(initial_date_value);
    const [availableDates, setAvailableDates] = useState([]);
    const [pickUpDate, setPickUpDate] = useState('');
    const t1 = "2pm - 3pm";
    return (
        <div className='w-full flex flex-col items-center justify-center'>
          <span className='w-full text-center py-8'></span>
            <div className='flex flex-col items-start justify-center space-y-4 border rounded-xl shadow-lg p-4 '>
                <div className='flex flex-col items-start justify-center'>
                    <span className='text-xl font-light'>Hi Ram</span>
                    <span className='text-2xl'>Laundary Pick Up Schedule</span>
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <span className='text-lg font-medium title'>select a date for pick up</span>
                    <CalendarDiv selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <span className='text-lg font-medium capitalize'>Available Slots for <span className='font-light'>{readable_formatted_date(selectedDate)}</span></span>
                    <span className='bg-sky-100 p-1 rounded'>{t1}</span>
                </div>
                <div className='w-full text-right'>
                    <Link to={`../${(selectedDate.month + 1)+'-'+selectedDate.day+'-'+selectedDate.year}/products`} className='bg-sky-500 text-white px-2 py-2 text-center rounded-lg'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

const CalendarDiv = ({selectedDate, setSelectedDate}) => {
  const dispatch = useDispatch();
    const today = new Date();
    const endOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);
    const handleSelectedDate = selected_date => {
      setSelectedDate(
        prev => (
          {
            ...prev, 
            'selectedDate': selected_date, 
            'year': selected_date.getFullYear(),
            'month': selected_date.getMonth(),
            'day': selected_date.getDate()
          }
        )
      );
      dispatch(setCurrentActiveDate(`${selected_date.month},${selected_date.day},${selected_date.year}`));
      localStorage.setItem('crr_date', `${selected_date.month},${selected_date.day},${selected_date.year}`);
    }
    return (
        <CalendarContainer>
            <Calendar 
            onChange={(value) => handleSelectedDate(value)}
            minDate={today}
            maxDate={endOfNextMonth}
            />
        </CalendarContainer>
        // <CalendarContainer>
        //     <FontAwesomeIcon icon={faCalendar} />
        //     <DatePicker
        //     dateFormat="dd/MM/yyyy"
        //     onChange={date => setSelectedDate(date)}
        //     selected={selectedDate}
        //     startDate={today}
        //     endDate={endOfMonth(today)}
        //     dropdownMode='select'
        //     showMonthDropdown
        //     showYearDropdown
        //     />
        // </CalendarContainer>
    );
};

// const CalendarContainer = styled.div`
// text-align: center;
// background-color: white;
// display: flex;
// justify-content: center;
// align-items: center;
// border: 1px solid blue;
// border-radius: 5px;
// padding-left: 5px;
// padding-right: 5px;
// overflow: hidden;



// .react-datepicker {
//     background-color: white;
// }

// .react-datepicker__input-container input {
//     background-color: white;
//     outline: none;
//     border: none;
//     padding: 5px;
// }
// `


const CalendarContainer = styled.div`
width: 400px;
height: 100%;
text-align: center;
margin-top: 20px;


.react-calendar {
    border: 13px;
    border-radius: 10px;
    width: 400px;
    // box-shadow: 0px 0.5px 0px 0px;
    padding: 5px;
}

.react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: light;
      color: black;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: light;
    font-size: 0.75em;
  }

  button {
    margin: 3px;
    background-color: white;
    border: 0;
    border-radius: 3px;
    color: black;
    padding: 5px 0;

    &:hover {
      background-color: gray;
      color: black
    }

    &:active {
      background-color: green;
      color: white;
    }
    &:focus {
      color: white;
    }
  }
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.3;
  }
  .react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }
    
    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`

// export default function NewOrder() {
//     const [availableDates, setAvailableDates] = useState([]);
//     const [pickUpDate, setPickUpDate] = useState('');

//     useEffect(() => {
//         setAvailableDates(
//             () => {
//                 let newdates = [];
//                 for(let i = 1; i <= 15; i++) {
//                     newdates.push(`Date ${i}`);
//                 }
//                 return newdates;
//             }
//         )
//     }, [setAvailableDates]);

//     return (
//         <div className='w-full bg-red-200'>
//             {availableDates.map((item, idx) => <span key={idx}>{item}</span>)}
//         </div>
//     )
// }