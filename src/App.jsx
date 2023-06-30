import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import HomePage from "./component/Homepage"
import CreatePost from './component/CreatePost';
import Login from './component/Login';
import { useState } from "react";
import NavBar from './component/NavBar';



function App() {
 const [isAuth, setIsAuth] = useState(false)
 
  return (
    <>
      <div className='max-w-4xl mx-auto'>
        <Router >
          <NavBar />
           <Routes>
             <Route path='/' element={<HomePage />} />
             <Route path='/createpost' element={<CreatePost />} />
             <Route path='/login' element={<Login setIsAuth={setIsAuth} />}/>
           </Routes>
        </Router>

      </div>
    </>
  )
}

export default App
