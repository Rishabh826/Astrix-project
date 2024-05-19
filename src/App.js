import { HashRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Collection from './components/collection';
import Event from './components/Event';

function App() {
  return (
    <HashRouter>
      <Routes basename="/Astrix-project">
      <Route exact path="/" element={<Collection />} />
      <Route exact path="/collection" element={<Collection />} />
      <Route exact path="/event" element={<Event/>} />
      </Routes>
      </HashRouter>

  );
}

export default App;
