import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Guitar from './pages/Guitar';
import Guitar2 from './pages/Guitar2';
import Bass from './pages/Bass';
import Drums from './pages/Drums';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guitar" element={<Guitar />} />
      <Route path="/guitar2" element={<Guitar2 />} />
      <Route path="/bass" element={<Bass />} />
      <Route path="/drums" element={<Drums />} />
    </Routes>
  )
}

export default App