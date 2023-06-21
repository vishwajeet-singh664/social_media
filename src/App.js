import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';
import CreateNewPost from './components/CreateNewPost';

function App() {
  return (
<>

<BrowserRouter>

<Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/newpost' element={<CreateNewPost/>}></Route>
      
    
    
    </Routes>



</BrowserRouter>
</>
  );
}

export default App;
