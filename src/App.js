import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Blogs from './pages/Blogs';
import BlogsDetails from './pages/BlogsDetails'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import PlacesRoutes from './pages/PlacesRoutes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} /> 
            <Route path='/about' element={<About />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/:id' element={<BlogsDetails />} />
            <Route path='/places' element={<PlacesRoutes />} /> 
            <Route path='*' element={<NoPage />} />       
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

