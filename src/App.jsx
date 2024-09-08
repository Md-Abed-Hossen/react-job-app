// src/App.jsx
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'
import Homemain from './components/Homemain';
import Error from './components/Error';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Blog from './components/Blog';
import About from './components/About';
import ContactForm from './components/ContactForm';
import JobDetails from './components/JobDetails';

function App() {
return(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Homemain/>}/>
  <Route path="/contact" element={<Homemain showContactForm={true} />} />
  <Route path="/about" element={<About/>}/>
  <Route path="/login" element={<LoginForm/>}/>
  <Route path="/job/:id" element={<JobDetails />} />
  <Route path="/register" element={<RegisterForm/>}/>
  <Route path="/blog" element={<Blog/>}/>
  <Route path="*" element={<Error/>}/>
</Routes>
</BrowserRouter>
); 
}

export default App;