import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import Notfound from './Components/pages/Notfound';
import Header from './Components/Layouts/header'
import Profile from './Components/pages/Profile';
import Settings from './Components/pages/Settings';


const App = () => {
 
  return (
   
    <>
      <div className="App">

        <Router>
       <Header/>
          <main>
            <Routes>
              <Route path='/' element={<Navigate to='/home'/>} />
             
              <Route path='/home' element={<Home />} />

              <Route path='/settings' element={<Settings  />} />
          
              <Route path='/Profile' element={<Profile />} />
          
              <Route path='*' element={<Notfound />} />

            </Routes>
        
          </main>
       
        
        </Router>
      </div>
 
    </>
      
  );
};

export default App;

