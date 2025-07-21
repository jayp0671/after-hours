import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Memories from './components/Memories';
import Playlist from './components/Playlist';
import LoveLetter from './components/LoveLetter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="memories" element={<Memories />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="love-letter" element={<LoveLetter />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
