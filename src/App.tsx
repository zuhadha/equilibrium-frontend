import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Auth/Register';
import Login from './Auth/Login';

function App() {
  return (
    <Router>
      <div className="app" style={{ background: "url('../src/assets/poster.png')" }}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
