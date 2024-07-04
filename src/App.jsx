import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import ProductId from './pages/ProductId';
import Purchase from './pages/Purchase';
import Register from './pages/Register';
import ProtectedRoutes from './pages/ProtectedRoutes';
import NavBar from './components/share/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductId />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchases" element={<Purchase />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;