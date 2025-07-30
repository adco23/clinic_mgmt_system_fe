import './App.css';
import { Route, Routes } from 'react-router';

import Landing from './pages/Landing';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import AuthLayout from './layouts/AuthLayout';

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path='auth' element={<AuthLayout/>}>
        <Route index element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
