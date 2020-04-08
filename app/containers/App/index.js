/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import GlobalStyle from '../../global-styles';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}
