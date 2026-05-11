import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./routes/Home";
import ProductListProvider from "./store/product-list-store";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <ProductListProvider>
        <Home />
      </ProductListProvider>
      <Footer />
    </>
  );
}

export default App;
