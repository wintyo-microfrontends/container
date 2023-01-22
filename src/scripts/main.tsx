import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const elRoot = document.getElementById('app') as HTMLElement;
const reactRoot = ReactDOM.createRoot(elRoot);

reactRoot.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
