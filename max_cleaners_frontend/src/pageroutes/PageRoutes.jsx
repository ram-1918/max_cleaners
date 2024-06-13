import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home';
import PrivateRoutes from './PrivateRoutes';
import BaseAuthForm from '../pages/auth/BaseAuthForm';
import PublicRoutes from './PublicRoutes';


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
                    <Route index path='home' element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}