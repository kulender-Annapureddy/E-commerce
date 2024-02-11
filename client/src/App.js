import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/Footer';
import kid_banner from '../src/components/assets/kid-ban1.jpg';
import men_banner from '../src/components/assets/men_ban1.jpg';
import women_banner from '../src/components/assets/wom-ban1.jpg';
import Register from './pages/Register';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Shop />}></Route>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />}></Route>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />}></Route>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids" />}></Route>
      <Route path='/product' element={<Product />}></Route>
      <Route path='/product/:productId' element={<Product />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/login' element={<LoginSignup />}/>
      <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
