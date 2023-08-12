import React from 'react';
import { Routes, Route } from 'react-router';
import MainPage from './components/layout/pages/MainPage';
import About from './components/layout/pages/About';
import Services from './components/layout/pages/Services';
import Careers from './components/layout/pages/Careers';
import Contact from './components/layout/pages/Contact';
import JobDetail from './components/layout/pages/JobDetail';
import Qoute from './components/layout/pages/Qoute'
import JobApplyForm from './components/layout/pages/JobApplyForm';
import Blog from './components/layout/pages/Blog';
import BlogDetail from './components/layout/pages/BlogDetail';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<MainPage />} />
      <Route exact path='/Services' element={<Services />} />
      <Route exact path='/About' element={<About />} />
      <Route exact path='/Careers' element={<Careers />} />
      <Route exact path='/Qoute' element={ <Qoute />} />
      <Route exact path='/Contact' element={<Contact />} />
      <Route exact path='/JobDetail' element={<JobDetail />} />
      <Route exact path='/JobApplyForm' element={<JobApplyForm/>} />
      <Route exact path='/Blog' element={<Blog/>} />
      <Route exact path='/BlogDetail' element={<BlogDetail />} />
    </Routes>
  );
}

export default App;
