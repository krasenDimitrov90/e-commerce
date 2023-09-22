import React from 'react';

import { Router, RouterProvider, createBrowserRouter, NavLink, Outlet } from 'react-router-dom';

import { ButtonTypes } from './components-renderer/ButtonTypes/ButtonTypes';
import { LinkTypes } from './components-renderer/LinkTypes/LinkTypes';
import { LinkButton } from './modules';

const Layout = () => {

  return (
    <>
      <div className='p-4 bg-blue-500 fixed top-0 w-full'>
        <nav className='flex justify-between w-6/12'>
          <LinkButton variant='secondary' font='xl' path='/buttons'>BUTTONS</LinkButton>
          <LinkButton variant='secondary' font='xl' path='/links'>LINKS</LinkButton>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: '/buttons', element: <ButtonTypes /> },
      { path: '/links', element: <LinkTypes /> },
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
