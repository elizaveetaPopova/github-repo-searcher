import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import FavoritesPage from './pages/FavoritesPage';
import RepoDetailPage from './pages/RepoDetailPage';
import SearchPage from './pages/SearchPage/SearchPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/repository/:id" element={<RepoDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
