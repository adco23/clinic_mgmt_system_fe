import './App.css';
import { Route, Routes } from 'react-router';

import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import NotFound from './pages/NotFound';
import Register from './pages/auth/Register';
import AuthLayout from './layouts/AuthLayout';
import DoctorProfile from './pages/auth/DoctorProfile';

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path='auth' element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path='register'>
          <Route index element={<Register />} />
          <Route path='doctor' element={<DoctorProfile />} />
        </Route>
      </Route>
      {/* // <Route path='doctor'>
      //   <Route index element={<DoctorProfile/>} />
      // </Route> */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
