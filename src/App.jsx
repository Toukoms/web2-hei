import Footer from "./components/footer";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <div className="children">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
