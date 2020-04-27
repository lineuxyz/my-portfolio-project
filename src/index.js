import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './App';

Sentry.init({dsn: "https://e1dc5521e0ad4a08a0ad0cbd17117d59@o303918.ingest.sentry.io/5215263"});

ReactDOM.render(<App />, document.getElementById('root'));
