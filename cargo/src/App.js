import Landing from './Landing';
import Provider from './Provider';
import RegisterPage from './Registerpage';
import Trucker from './Trucker'
import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App  bg-neutral-500">
      <Router>
        <Routes> 
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<RegisterPage />} />
         <Route path='/trucker' element={<Trucker/>} />
         <Route path='/provider' element={<Provider/>}/>
          </Routes>        
        </Router>    </div>
  );
}

export default App;
// bg-gradient-to-l w-screen h-screen p-3 text-white from-[#C33764] to-[#1D2671]