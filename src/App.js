import React, { useState } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';
import CreateNewPost from './components/CreateNewPost';
import About from './components/About';
function App() {
  const [newPost, setNewPost] = useState({
    username: "User_3",
    content: '',
    date: new Date(),
      likes: 12,
      feedbackCount: 0,
  });
  console.log("newpostss", newPost)
  return (
<>

<BrowserRouter>

<Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home newPost={newPost} />}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/about' element={<About/>}></Route>
       
        <Route path='/newpost' element={<CreateNewPost newPost={newPost} setNewPost= {setNewPost} />}></Route>
      
    
    
    </Routes>



</BrowserRouter>
</>
  );
}

export default App;
