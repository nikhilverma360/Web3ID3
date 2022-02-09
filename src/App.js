import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Id from './components/Id';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="id" element={<Id />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
