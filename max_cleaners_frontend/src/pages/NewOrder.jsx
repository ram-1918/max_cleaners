import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export const month_mapper = {
  0: 'january', 1: 'february', 2: 'march', 3: 'april', 4: 'may',
  5: 'june', 6: 'july', 7: 'august', 8: 'september', 9: 'october',
  10: 'november', 11: 'december'
}

const readable_formatted_date = selectedDate => {
  return `${month_mapper[selectedDate.month]} ${selectedDate.day}, ${selectedDate.year}`;
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
    const t1 = "2pm - 3pm";
    return (
        <div className='w-full flex flex-col items-center justify-center'>
          <Outlet />
        </div>
    )
}