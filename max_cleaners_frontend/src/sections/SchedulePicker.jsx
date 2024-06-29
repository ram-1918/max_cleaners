import CalendarDiv from "./CalendarDiv";
import BaseCard from "../components/BaseCard";

export const month_mapper = {
    0: 'january', 1: 'february', 2: 'march', 3: 'april', 4: 'may',
    5: 'june', 6: 'july', 7: 'august', 8: 'september', 9: 'october',
    10: 'november', 11: 'december'
  }

const readable_formatted_date = selectedDate => {
    return `${month_mapper[selectedDate.month]} ${selectedDate.day}, ${selectedDate.year}`;
  }
  

export default function SchedulePicker() {
    return (
        <BaseCard 
            title="Schedule a Pick up for Laundary"
            component1={<LeftComponent />}
            component2={<RightComponent />}
            nextPagePath="/home/neworder/select-items"
            nextPageText="Continue"
            prevPagePath="/home/"
            prevPageText="Home"
        />
    )
}

function LeftComponent() {
    return (
        <div className='flex flex-col justify-center items-start'>
            <span className='text-lg font-medium title capitalize'>select a date for pick up</span>
            <CalendarDiv />
        </div>
    )
}

function RightComponent() {
    const t1 = "2pm - 3pm";
    return (
        <div className='flex flex-col justify-center items-start space-y-5'>
            <span className='text-lg font-light capitalize'>Available Slots for <span className='font-medium'>28th June, 2024</span></span>
            <span className='bg-sky-100 p-1 rounded'>{t1}</span>
        </div>
    )
}



/*
export default function SchedulePicker() {
    const t1 = "2pm - 3pm";
    return (
        <>
            <div className='flex flex-col items-start justify-center space-y-4 border rounded-xl shadow-lg p-6 '>
                <BackButton text="back" path="/home" />
                <span className='w-full text-center text-2xl p-2'>Schedule a Pick up for Laundary</span>
                <div className="flex justify-center items-start space-x-10">
                    <div className='flex flex-col justify-center items-start'>
                        <span className='text-lg font-medium title capitalize'>select a date for pick up</span>
                        <CalendarDiv />
                    </div>
                    <div className='flex flex-col justify-center items-start space-y-5'>
                        //  <span className='text-lg font-medium title capitalize'>select a time slot for pick up</span> 
                        <span className='text-lg font-light capitalize'>Available Slots for <span className='font-medium'>28th June, 2024</span></span>
                        <span className='bg-sky-100 p-1 rounded'>{t1}</span>
                    </div>
                </div>
                <div className='w-full text-right'>
                    <Link to='/home/neworder/select-items' className='bg-sky-500 text-white px-2 py-2 text-center rounded-lg hover:opacity-70'>Continue</Link>
                </div>
            </div>
        </>
    )
}
*/