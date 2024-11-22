import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import * as Sentry from '@sentry/react';

// Sentry.init({
//   dsn: "https://34e85e4255d768ad2d6b1a73704a6302@o4508301825146880.ingest.de.sentry.io/4508301828948048",
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     Sentry.metrics.metricsAggregatorIntegration(),
//     Sentry.reactRouterV6BrowserTracingIntegration ({
//       useEffect: React.useEffect,
//     }),
//     Sentry.replayIntegration({
//       maskAllText: false,
//       blockAllMedia: false,
//     }),
//   ],
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//   tracesSampleRate: 1.0,
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);


// Problema e aici