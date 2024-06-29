import Calendar from 'react-calendar';
import styled from 'styled-components';

export default function CalendarDiv({selectedDate, setSelectedDate}) {
    // const dispatch = useDispatch();
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
        // dispatch(setCurrentActiveDate(`${selected_date.month},${selected_date.day},${selected_date.year}`));
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
      );
  };


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