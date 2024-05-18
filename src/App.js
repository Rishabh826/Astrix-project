import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Collection from './components/collection';
import Event from './components/Event';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Collection />} />
      <Route exact path="/event" element={<Event/>} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
