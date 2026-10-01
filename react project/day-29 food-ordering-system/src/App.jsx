import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MenuDetails from "./pages/MenuDetails";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="h-screen bg-black text-white relative">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/food/:id" element={<MenuDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
};

export default App;
