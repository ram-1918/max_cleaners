import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home';
import PrivateRoutes from './PrivateRoutes';
import BaseAuthForm from '../pages/auth/BaseAuthForm';
import PublicRoutes from './PublicRoutes';
import NewOrder from '../pages/orders/NewOrder';
import BaseOrderPage from '../pages/orders/BaseOrderPage';
import Products from '../pages/orders/Products';


export default function PageRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public routes */}
                <Route path='/auth/' element={<PublicRoutes />}>
                    <Route path='' element={<Navigate to='/auth/login' />} />
                    <Route path=':type' element={<BaseAuthForm />} />
                </Route>
                {/* Private Routes */}
                <Route path='/' element={<PrivateRoutes />}>
                    <Route path='' element={<Navigate to='/home' />} />
                    <Route index path='home/' element={<Home />}></Route>
                    <Route path='order/' element={<BaseOrderPage />}>
                        <Route path='new' element={<NewOrder />} />
                        <Route path=':date/products' element={<Products />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}