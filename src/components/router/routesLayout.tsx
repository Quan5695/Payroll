import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

type Props = {
    layout?: React.ComponentType<any>;
    isPrivate?: boolean;
    redirect?: string;
    component: React.ComponentType<any>;
    role?: string[];
} & RouteProps;

export const RouteLayout: React.FC<Props> = ({
    layout: Layout,
    component: Component,
    isPrivate,
    role,
    redirect,
    path,
    ...props
}) => {
    // if (Layout) {
    //     return <Route element={<Layout />}>
    //         <Route {...props} element={<Component />}></Route>
    //     </Route>

    // } 
     return <Route {...props} element={<Component />}></Route>

};

export default RouteLayout;

RouteLayout.defaultProps = {
    isPrivate: true,
};
