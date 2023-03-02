import React, { memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login';
import { AppRoutes } from './helpers/app.routes';
import MainLayout from './layouts/Main'


const getLayout = (Component: any, isPathLogin?: boolean) => {
    let ComponentLayout = Component
    const isAuthenticated = false;
    if (!isAuthenticated) return <Navigate replace to={AppRoutes.login} />;

    if (isPathLogin && isAuthenticated) {
        ComponentLayout = DashboardPage
    }

    return <MainLayout>
        <ComponentLayout />
    </MainLayout>
}
export const RootRouter = memo(() => {
    return (
        <Routes >
            <Route path={AppRoutes.login} element={<LoginPage/>} />
            <Route path="/" element={getLayout(DashboardPage)} />
        </Routes>)
})