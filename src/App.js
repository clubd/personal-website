import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loadingpage from './pages/Loadingpage/Loadingpage';
import Homepage from './pages/Homepage/Homepage';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/loading" element={<Loadingpage />}/>
      <Route path="/home" element={<Homepage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;