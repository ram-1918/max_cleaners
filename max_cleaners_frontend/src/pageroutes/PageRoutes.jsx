// import PrivateRoutes from './PrivateRoutes';
// import BaseAuthForm from '../pages/auth/BaseAuthForm';
// import PublicRoutes from './PublicRoutes';
// import NewOrder from '../pages/orders/NewOrder';
// import BaseOrderPage from '../pages/orders/BaseOrderPage';
// import Products from '../pages/orders/Products';

import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from '../Home';
import HomePage from '../pages/HomePage';
import NewOrder from '../pages/NewOrder';
import SchedulePicker from '../sections/SchedulePicker';
import Products from '../sections/Products';
import AddonsPage from '../pages/AddonsPage';
import OrderOverviewPage from '../pages/OrderOverviewPage';
import OrderConfirmationPage from '../pages/OrderConfirmationPage';
import ProfilePage from '../pages/ProfilePage';
import AddressSection from '../sections/AddressSection';
import OrdersPage from '../pages/OrderPage';
import OrderDetailPage from '../pages/OrderDetailPage';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import BaseAuthForm from '../pages/auth/BaseAuthForm';

export default function PageRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth/' element={<PublicRoutes />}>
                    <Route path='' element={<Navigate to='/auth/login' />} />
                    <Route path=':type' element={<BaseAuthForm />} />
                </Route>
                <Route path='/' element={<PrivateRoutes />}>
                    <Route path='/' element={<Home />} >
                        <Route index element={<Navigate to='/home' />}></Route>
                        <Route path='home/' element={<HomePage />}></Route>
                        <Route path='profile/' element={<ProfilePage />}>
                            <Route path='add-address' element={<AddressSection />}></Route>
                        </Route>
                        <Route path='home/neworder/' element={<NewOrder />}>
                            <Route index element={<Navigate to='./pick-a-schedule' />}></Route>
                            <Route path='pick-a-schedule' element={<SchedulePicker />} />
                            <Route path='select-items/' element={<Products />} >
                                <Route path='add-ons/:productid' element={<AddonsPage />} />
                            </Route>
                            <Route path='overview' element={<OrderOverviewPage />} />
                        </Route>
                        <Route path='/home/neworder/order-confirmation' element={<OrderConfirmationPage />} />
                        <Route path='/home/orders/' element={<OrdersPage />} >
                            <Route path=':id/detail' element={<OrderDetailPage />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}