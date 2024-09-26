import { ThemeProvider } from "./components/ThemeProvider";
import { Interview } from "./pages/Interview";
import { Login } from "./pages/Login";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-1 items-center justify-center border">
        {/* <Login /> */}
        <Interview />
      </div>
    </ThemeProvider>
  );
}

export default App;
