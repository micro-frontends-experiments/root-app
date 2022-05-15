import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import AuthPage from './pages/Auth';
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
    <div className="App">
      <Routes>
        {isAuth && <Route path="/home" element={<HomePage isAuth={isAuth} userId={userId} />} />}
        {!isAuth && <Route path="/auth" element={<AuthPage setIsAuth={setIsAuth} isAuth={isAuth} setUserId={setUserId} />} />}
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
              element={<Navigate to="/auth" replace />}
            />
          )}
      </Routes>
    </div>
  );
}

export default App;
