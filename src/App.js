import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import LoginPage from './pages/Login';
import CreateAccountPage from './pages/CreateAccount';
import HomePage from './pages/Home';
import './App.css';
import { checkAuth } from './api/endpoints';

function App() {
  console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    checkAuth().then((res) => {
      setUserId(res.userId);
      setIsAuth(res.isAuth);
    });
  }, []);

  return (
    <div className="App h-screen">
      <Routes>
        {isAuth && <Route path="/home" element={<HomePage isAuth={isAuth} userId={userId} />} />}
        {!isAuth
          && (
          <>
            <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} setUserId={setUserId} />} />
            <Route path="/create-account" element={<CreateAccountPage setIsAuth={setIsAuth} setUserId={setUserId} />} />
          </>
          )}
        {isAuth
          ? (
            <Route
              path="*"
              element={<Navigate to="/home" replace />}
            />
          )
          : (
            <Route
              path="*"
              element={<Navigate to="/login" replace />}
            />
          )}
      </Routes>
    </div>
  );
}

export default App;
