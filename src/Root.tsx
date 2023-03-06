import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import App from './App';
import i18n from './i18n';

const Root = () => {
    return (
            <I18nextProvider i18n={i18n}>
                    <Router>
                      <App />
                    </Router>
            </I18nextProvider>
      );
}

export default Root;
