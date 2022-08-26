import './App.css';
import Body from './Body';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navbar />

        <Routes>
        <Route path='/' element={<Body />} exact/>
        <Route path='/dashboard' element={<Dashboard />} exact/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
