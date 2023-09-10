
import './App.css';
import Login from './UI/Login';
import Signup from './UI/Signup';
import DashBoard from './UI/DashBoard';
import ContextProvider from './Context/Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return <div className="App">
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>

      </BrowserRouter>

    </ContextProvider>
  </div>

}

export default App;
