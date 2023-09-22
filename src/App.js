import React from 'react';

import { Router, RouterProvider ,createBrowserRouter } from 'react-router-dom';

import { ButtonTypes } from './components-renderer/ButtonTypes/ButtonTypes';
import { LinkTypes } from './components-renderer/LinkTypes/LinkTypes';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <LinkTypes /> },
      { path: '/buttons', element: <ButtonTypes /> },
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
