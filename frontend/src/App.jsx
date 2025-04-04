import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/Home";
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';

export default function App() {

  const routes = (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route />
      </Routes>
    </Router>
  )

  return (
      <div>
        {routes}
      </div>
  )
};
