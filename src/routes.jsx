import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPostPage from './pages/BlogPostPage';
import BlogPostsPage from './pages/BlogPostsPage';

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPostsPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
