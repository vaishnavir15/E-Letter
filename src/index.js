import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TestPage from './components/TestPage';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import UploadPage from './components/UploadPage';
import CreateInitialPage from './components/CreateInitialPage';
import CreateTextPage from './components/CreateTextPage';
import CreateEmailPage from './components/CreateEmailPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/Home",
    element: <HomePage></HomePage>,
  },
  {
    path: "test",
    element: <TestPage></TestPage>,
  },
  {
    path: "About",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "Upload",
    element: <UploadPage></UploadPage>,
  },
  {
    path: "PickImage",
    element: <CreateInitialPage></CreateInitialPage>,
  },
  {
    path: "TypeMessage",
    element: <CreateTextPage></CreateTextPage>,
  },
  {
    path: "Email",
    element: <CreateEmailPage></CreateEmailPage>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
  
);


