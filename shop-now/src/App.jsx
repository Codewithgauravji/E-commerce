import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import TopRated from './Components/TopRated/TopRated';
import KidsWear from './Components/KidsWear/KidsWear';
import MensWears from './Components/MansWears/MensWears';
import Electronics from './Components/Electronics/Electronics';
import WomenWear from './Components/WomenWear/WomenWear';
import Cart from './Components/Cart';
import Swal from 'sweetalert2';
function App() {

    const [cart, setcart] = useState([])

    const AddToCart = (product) => {
      const isPresent = cart.find((finditem) => finditem.id === product.id);
  
      if (isPresent) {
          const upDateCart = cart.map((item) =>(
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ));
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add to cart succsefull",
            timer: 1500
          });
          setcart(upDateCart);
      } else {
          setcart([...cart, { ...product, quantity: 1 }]);
      }
  };
  
  const handleInc = (id) => {
      const upDateCart = cart.map((item) =>(
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ));
      setcart(upDateCart);
  }

  const handleDec = (id) => {
      const upDateCart = cart.map((item) =>(
          item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      ));
      setcart(upDateCart);
  }

  const handleRemove = (id) => {
      const upDateCart = cart.filter((item) => item.id !== id);
      setcart(upDateCart);
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home AddToCart={AddToCart} cart={cart}/>} />
          <Route path="/cart" element={<Cart cart={cart} handleDec={handleDec} handleInc={handleInc} handleRemove={handleRemove}/>} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/kidswear" element={<KidsWear AddToCart={AddToCart}/>} />
          <Route path="/menswear" element={<MensWears AddToCart={AddToCart}/>} />
          <Route path="/electronics" element={<Electronics AddToCart={AddToCart}/>} />
          <Route path="/womenwear" element={<WomenWear AddToCart={AddToCart}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App