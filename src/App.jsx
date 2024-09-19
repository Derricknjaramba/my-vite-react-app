import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Admin from './components/Admin'
import Viewfeedbk from './components/Viewfeedbk';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Admin />}  />
        <Route path="/viewfeedbk" element={<Viewfeedbk />} />
      </Routes>
    </Router>
  );
}

export default App;
