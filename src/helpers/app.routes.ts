interface Params {
    [key: string]: string;
  }
  export const AppRoutes = {
    replaceParams: (route: string, params: Params = {}) => {
      let finalRoute = route;
      Object.keys(params).forEach((key) => {
        finalRoute = finalRoute.replace(`:${key}`, params[key]);
      });
      return finalRoute;
    },
    login: '/login',
    home: '/dashboard',
    user: '/user'
}