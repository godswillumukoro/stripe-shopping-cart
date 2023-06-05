import NavbarComponent from "./components/Navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import CartProvider from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent />
        <BrowserRouter>
          <Routes>
            {/* base route '/' */}
            <Route index element={<Store />}></Route>
            <Route path="success" element={<Success />}></Route>
            <Route path="cancel" element={<Cancel />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
