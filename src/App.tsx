import { ThemeProvider } from "./components/ThemeProvider";
import { Interview } from "./pages/Interview";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from "./pages/Login";
import { Roadmap } from "./pages/Roadmap";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Interview" element={<Interview />} />
          <Route path="/Roadmap" element={<Roadmap />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
