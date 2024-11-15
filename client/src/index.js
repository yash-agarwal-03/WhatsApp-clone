import React from 'react';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './components/account/signin';
// import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ChatDialog from './components/chatPage/chatdialog';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const clientid='1023690593667-a55sj2je2ssrbtufas36u7mstse57sgv.apps.googleusercontent.com'
const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />)
  },
  {
    path: "/mailLogin",
    element: (<SignIn/>)
  },
  {
    path: "/chat",
    element: (<ChatDialog/>)
  }
]);

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={clientid} >
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
);
reportWebVitals(console.log);
