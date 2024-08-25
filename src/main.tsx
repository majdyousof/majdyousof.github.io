import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and routing components
import App from './pages/App';
import Articles from './pages/Articles'; // Import the new page component
import './styling/index.css';
import './fonts/stylesheet.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  </StrictMode>
);
