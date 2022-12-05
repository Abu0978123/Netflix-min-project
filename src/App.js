import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/'element={<Home/>} />
        {/* <Route path='/create'element={<Create/>} /> */}
        {/* <Route path='/read'element={<Read/>} /> */}
        {/* <Route path='/update/:id'element={<Update/>} /> */}
    </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
