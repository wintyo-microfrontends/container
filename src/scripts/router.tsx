import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';
import { External } from './pages/External';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { ReactApp } from './pages/ReactApp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'external/*',
        element: <External />,
      },
      {
        path: 'react-app/*',
        element: <ReactApp />,
      },
      {
        path: 'page1',
        element: <Page1 />,
      },
      {
        path: 'page2',
        element: <Page2 />,
      },
    ],
  },
]);
