import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from './components/LoginForm';
import Home from './components/Home';

export default function Appp() {
  
  return (

     <BrowserRouter>
      <Routes>
          <Route index element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
       
      </Routes>
    </BrowserRouter>

    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Appp />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
