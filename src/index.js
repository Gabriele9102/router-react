import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Users from './routes/Users/Users';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path:"/users",
    element: <h1>Users default page, insert an id for see it</h1>
  },
  {
    path:"/users/:userId",
    element: <Users />
  },
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
);

