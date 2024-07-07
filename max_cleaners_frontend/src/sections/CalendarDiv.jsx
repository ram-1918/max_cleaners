import Calendar from "react-calendar";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { selectedScheduleAtom } from "../recoil_state/atoms";
import { save_to_local } from "../assets/utils";

export default function CalendarDiv() {
  const [selectedSchedule, setSelectedSchedule] = useRecoilState(selectedScheduleAtom);
  const today = new Date();
  const endOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);
  const handleSelectedDate = (selected_date) => {
    setSelectedSchedule((prev) => ({
      ...prev,
      date: selected_date,
    }));
    save_to_local('schedule', {...selectedSchedule, 'date': selected_date});
  };
  return (
    <CalendarContainer>
      <Calendar
        onChange={(value) => handleSelectedDate(value)}
        value={selectedSchedule.date}
        minDate={today}
        maxDate={endOfNextMonth}
      />
    </CalendarContainer>
  );
}

const CalendarContainer = styled.div`
  width: 400px;
  height: 100%;
  text-align: center;
  margin-top: 0px;

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
  .react-calendar__tile--active {
    background-color: skyblue !important;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover {
    background-color: skyblue !important;
  }
  .today:hover {
    border: 10px solid #1f1b13 !important;
    background-color: red;
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
      color: black;
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
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  /* References
1. https://medium.com/@suvarna.kale/react-calendar-customization-4bdf89d04dbb
2. 
*/
`;
