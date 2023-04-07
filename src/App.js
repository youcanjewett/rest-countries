import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Countries from './components/Countries';
import Country from './components/Country';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
