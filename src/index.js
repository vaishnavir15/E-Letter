import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TestPage from './components/TestPage';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
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
    element: <TestPage></TestPage>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
  
);


