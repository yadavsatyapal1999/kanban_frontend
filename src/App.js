
import './App.css';
import Login from './UI/Login';
import Signup from './UI/Signup';
import DashBoard from './UI/DashBoard';
import ContextProvider from './Context/Context';

function App() {
  return <div className="App">
    <ContextProvider>
      <DashBoard />
      <Signup />
      <Login />

    </ContextProvider>
  </div>

}

export default App;
