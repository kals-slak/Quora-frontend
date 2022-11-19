import LoginForm from "./components/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
          <Route index element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
