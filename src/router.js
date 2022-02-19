import React from "react";
import {Routes, Route} from "react-router-dom";
import Layout from './layout';
import Home from './components/Home';
import Nganh from './components/Nganh';
import Lienket from './components/Lienket';
import Xtuyen from './components/Xtuyen';
import Dieukien from './components/Dieukien';
import Chatluong from './components/Chatluong';

export default function Router() {
  return (
    <div>
        <Routes>    
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/nganh" element={<Nganh />} />
            <Route path="/lienket" element={<Lienket />} />
            <Route path="/xettuyen" element={<Xtuyen />} />
            <Route path="/dieukien" element={<Dieukien />} />
            <Route path="/chatluong" element={<Chatluong />} />
          </Route>
        </Routes>       
    </div>            
  );
}