import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';

// Lazy load pages to code-split
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const Arsenal = lazy(() => import('./pages/Arsenal'));
const Coaches = lazy(() => import('./pages/Coaches'));
const Safety = lazy(() => import('./pages/Safety'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={
          <div className="min-h-screen bg-gunmetal-900 flex items-center justify-center">
            <div className="text-steel-400 text-sm uppercase tracking-widest">Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/arsenal" element={<Arsenal />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;

