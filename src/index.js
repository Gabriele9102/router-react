import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Users from './routes/Users/Users';
import UserPage from './routes/UserPage';
import Posts from './routes/posts';
import PostPage from './routes/PostPage';
import Navbar from './components/navbar/Navbar';
import Layout from './components/layout/Layout';


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <App />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path:"/users",
//     element: <Users />,
//   },
//   {
//     path:"/users/:userId",
//     element: <UserPage />
//   },
//   {
//     path:"/posts",
//     element: <Posts />,
//   },
//   {
//     path:"/posts/:postId",
//     element: <PostPage />
//   },
  
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<App />} errorElement={<ErrorPage />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:userId" element={<UserPage />} />
      <Route path="posts" element={<Posts />} />
      <Route path="/posts/:postId" element={<PostPage />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
);

