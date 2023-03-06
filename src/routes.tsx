import React, { memo } from 'react';
import {Navigate, Route, Routes, Outlet} from 'react-router-dom';
import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login';
import UserPage from "./pages/user";
import { AppRoutes } from './helpers/app.routes';
import MainLayout from './layouts/Main'
import Error404 from "./pages/errorpage/404";


const isAuthenticated = () => {
    return true;
}
const hasPermission = () => {
    return false
}
const RoutesLayout = () => {
    if (!isAuthenticated()) {
        return <Navigate replace to={AppRoutes.login} />
    }
    return (
        <>
            <div className="container">
                <MainLayout/>
                <Outlet />
            </div>
        </>
    );
}

const RoutesPermission = () => {
    return hasPermission() ? (<>
            <Outlet/>
        </>
    ) : <Navigate replace to={AppRoutes.home} />
}
export const RootRouter = memo(() => {
    return (
        <Routes >
            <Route path={AppRoutes.login} element={isAuthenticated() ? <Navigate replace to={AppRoutes.home} /> : <LoginPage/>} />
            <Route element={<RoutesLayout /> }>
                <Route path={AppRoutes.home} element={<DashboardPage/>} />
                <Route path="/" element={<DashboardPage/>} />
                <Route element={<RoutesPermission />}>
                    <Route path={AppRoutes.user} element={<UserPage/>} />
                </Route>
            </Route>
            <Route path="*" element={<Error404/>} />

        </Routes>)
})