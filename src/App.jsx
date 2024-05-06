import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Products/ProductsBody';
import Home from './components/Home/Home';
import Product from './components/Details/Product';
import Category from './components/Details/Category';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/products" element={<Body />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/category/:id" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
