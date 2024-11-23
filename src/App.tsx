import { ThemeProvider } from "./components/ThemeProvider";
import { Interview } from "./pages/Interview";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Roadmap } from "./pages/Roadmap";
import { SignUp } from "./pages/SignUp";
import PrivateRoute from './components/PrivateRoute';

function App() {
  const isAuthenticated = localStorage.getItem('authTOken') !== null;

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Interview" element={<PrivateRoute isAuthenticated={isAuthenticated} element={<Interview />} />}/>
          <Route path="/Roadmap" element={<PrivateRoute isAuthenticated={isAuthenticated} element={<Roadmap />} />} />
          <Route path="/SignUp" element={<PrivateRoute isAuthenticated={isAuthenticated} element={<SignUp />} />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
