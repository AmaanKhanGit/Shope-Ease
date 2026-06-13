import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Footer from "./components//layout/Footer";
import Header from "./components/layout/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

//& the development phase has been done now it's in testing phase

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
