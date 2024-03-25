import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loadingpage from './pages/Loadingpage/LoadingpPage';
import Homepage from './pages/Homepage/Homepage';
import LoadingBar from './components/LoadingBar/LoadingBar';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<LoadingBar />}/>
      {/* <Route path="/loading" element={<Loadingpage />}/>
      <Route path="/home" element={<Homepage/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;