import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./component/Homepage"
import CreatePost from './component/CreatePost';
import Login from './component/Login';
import { useState } from 'react';



function App() {
  
 
  return (
    <>
      <div className='max-w-4xl mx-auto'>
        <Router >
        <Navbar />
           <Routes>
             <Route path='/' element={<HomePage />} />
             <Route path='/createpost' element={<CreatePost />} />
             <Route path='/login' element={<Login />}/>
           </Routes>
        </Router>

      </div>
    </>
  )
}

export default App
