import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google'
;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <GoogleOAuthProvider clientId="495688189304-b62dg0fe4hqqcdnjt8chtmcn046vk983.apps.googleusercontent.com">
     <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>
 
);


