import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './pages/App';
import Articles from './pages/Articles';
import Projects from './pages/Projects';
import './styling/index.css';
import '@fontsource/libertinus-serif/latin-400.css';
import '@fontsource/libertinus-serif/latin-400-italic.css';
import '@fontsource/libertinus-serif/latin-700.css';

const Article = lazy(() => import('./pages/Article'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<Article />} />
        </Routes>
      </Suspense>
    </Router>
  </StrictMode>
);
