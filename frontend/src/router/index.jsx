// index.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../page/Home';
import Login from '../page/Login';
import Register from '../page/Register';
import About from '../page/About';
import NotFound from '../page/NotFound';
import Layout from '../Layout/Layout';


const RouterConfig = () => {
  
    return (
      <Router>
        {/* Utilisez Layout pour envelopper vos routes */}
          <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="/Contact" element={<Login />} />
            <Route path="/Clients" element={<Register />} />
            <Route path="/Places" element={<Register />} />

            <Route path="/About" element={<About />} />
            <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
     
      </Router>
    );
  };
  

export default RouterConfig;
