import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import AuthPage from './pages/Auth';
import HomePage from './pages/Home';
import './App.css';

function App() {
  console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
