import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
