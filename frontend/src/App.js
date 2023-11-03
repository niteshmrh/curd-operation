import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
