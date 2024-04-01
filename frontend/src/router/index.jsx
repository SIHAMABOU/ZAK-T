// index.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../page/Home';
import Login from '../page/Login';
import Register from '../page/Register';
import Users from '../page/Users';
import NotFound from '../page/NotFound';
import Layout from '../Layout/Layout';


const RouterConfig = () => {
  
    return (
      <Router>
        {/* Utilisez Layout pour envelopper vos routes */}
          <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
     
      </Router>
    );
  };
  

export default RouterConfig;
