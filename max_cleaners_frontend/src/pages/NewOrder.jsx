import { Outlet } from 'react-router-dom';

export default function NewOrder() {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
          <Outlet />
        </div>
    )
}