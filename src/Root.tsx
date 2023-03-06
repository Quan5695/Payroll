import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { createStore } from 'redux'
import RootReducer from './redux/reducers'
import { Provider } from "react-redux"

import App from './App';
import i18n from './i18n';


let store = createStore(RootReducer)
const Root = () => {
        return (
                <I18nextProvider i18n={i18n}>
                        <Router>
                                <Provider store={store}>
                                        <App />

                                </Provider>
                        </Router>
                </I18nextProvider>
        );
}

export default Root;
