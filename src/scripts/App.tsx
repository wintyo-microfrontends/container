import { FC } from 'react';
import { hot } from 'react-hot-loader';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { External } from './pages/External';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';

const App: FC = () => {
  return (
    <div>
      <div>Hello, React App!</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/external">External</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/external" element={<External />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  );
};

export default hot(module)(App);
