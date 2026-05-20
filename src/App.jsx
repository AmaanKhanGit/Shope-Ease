import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components//layout/Footer";
import Header from "./components/layout/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </>
  );
}

export default App;
