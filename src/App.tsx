import { ThemeProvider } from "./components/ThemeProvider";
import { Interview } from "./pages/Interview";
import { Login } from "./pages/Login";
import { Roadmap } from "./pages/Roadmap";

function App() {
  return (
    <ThemeProvider>
      <div className="w-full h-full">
        {/* <Login /> */}
        <Interview />
        {/*  <Roadmap /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
