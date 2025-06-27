import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import SearchPage from './pages/SearchPage/SearchPage';
import FavoritesPage from './pages/FavoritesPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
