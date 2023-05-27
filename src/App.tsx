import React from 'react';
import logo from './logo.svg';
import 'tailwindcss/tailwind.css';
import './App.css';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import SummaryPage from './pages/SummaryPage';
import DetailTransaction from "./pages/DetailTransaction";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/detail/:string" element={<DetailTransaction />} />
              <Route path="/navigator" element={<ListPage />} />
              <Route path="/" element={<SummaryPage />} />
          </Routes>
      </Router>
  );
}

export default App;
