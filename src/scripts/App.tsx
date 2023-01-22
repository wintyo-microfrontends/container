import { FC } from 'react';
import { hot } from 'react-hot-loader';
import { Link, Outlet } from 'react-router-dom';

const App: FC = () => {
  return (
    <div>
      <div>Hello, React App!</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/external">External</Link>
        <Link to="/react-app">React App</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default hot(module)(App);
