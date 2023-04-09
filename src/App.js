import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import StudentDetails from './components/StudentDetails';
import SspDetails from './components/Sspdetails';
import UpdateDetails from './components/UpdateDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddStudent />} />
        <Route path="/students/:rollNumber" element={<StudentDetails />} />
        <Route path="/ssp/:rollNumber" element={<SspDetails />} />
        
      </Routes>
    </Router>
  );
}

export default App;
