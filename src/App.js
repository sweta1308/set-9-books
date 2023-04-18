import { Routes, Route } from 'react-router';
import './App.css';
import {Home} from './pages/Home';
import { Favourite } from './pages/Favourite';
import { Profile } from './pages/Profile';
import { Read } from './pages/Read';
import { Header } from './component/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourites' element={<Favourite />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/read' element={<Read />} />
      </Routes>
    </div>
  );
}

export default App;
