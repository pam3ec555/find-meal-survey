import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PostHogProvider} from 'posthog-js/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PostHogProvider
      apiKey="phc_7uP5Kfhcd4WCOXByMFnmWNPN0BsIyH1WlJnq7nDQm1N"
      options={{api_host: 'https://us.i.posthog.com', autocapture: false}}
    >
      <App />
    </PostHogProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
