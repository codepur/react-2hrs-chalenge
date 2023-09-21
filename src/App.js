import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';

const initial = [
  {
    id: 9001,
    name: "item1",
    price: 100,
    discount: 5,
    type: "literarture",
    img_url: "x",
  },
  {
    id: 9002,
    name: "item1",
    price: 50,
    discount: 5,
    type: "literarture",
    img_url: "x",
  },
  {
    id: 9003,
    name: "item1",
    price: 10,
    discount: 5,
    type: "literarture",
    img_url: "x",
  },
]
function App() {
  const [cart, setCart] = useState(initial);
  
  useEffect(()=>{
    const updatedCart = cart.map((item) =>({...item, quantity: 0} ));
    setCart(updatedCart);
  },[])

  // Function to increase the quantity of an item in the cart
  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Function to decrease the quantity of an item in the cart
  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const TotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  return (  
    <div className="App">
      <nav className='navbar'></nav>
      <div className="container">
        <div className="row mt-5 ">
          <h2>
            Order Summary
          </h2>
        </div>
        <div className='row'>
          <div className='col-8  me-5'>
            <div className='row border-top border-bottom border-2 py-3'>
              <div className='col-7 d-flex justify-content-start align-items-center'>Items ({ cart.length })</div>
              <div className='col-3 d-flex justify-content-center align-items-center'>Qty.</div>
              <div className='col-2 d-flex justify-content-center align-items-center'>Price</div>
            </div>
            <div className=''>
              {cart.map((item,idx) => (
                <div className='row my-3' key={item.id}>
                  <div className='col-7 d-flex justify-content-start align-items-center p-2 border border-2'>
                       <img src="https://dummyimage.com/64x64/000/fff" alt='img' className='img img-fluid'></img>
                       <span className='ms-4'>  Items {idx+1} </span>
                  </div>
                  {/* {item.name} - ${item.price} x {item.quantity} */}
                  <div className='col-3 d-flex justify-content-center align-items-center'>
                    <div className='d-flex'>
                      <button className='mx-2 button_none ' onClick={() => increaseQuantity(item.id)}>+</button>
                      <div className='mx-2 border box d-flex justify-content-center align-items-center'>{item.quantity }</div>
                      <button className='mx-2  button_none' onClick={() => decreaseQuantity(item.id)}>-</button>
                    </div>
                  </div>
                  <div className='col-2 d-flex justify-content-center align-items-center'>${item.price * item.quantity}</div>
                </div>
              ))}
            </div>

          </div>
          <div className='col-3  '>
            <div className='border border-2 p-3'>
            <h5>Total </h5>
            <div className='row'>
              <div className='col-8'>
                <div>Items ({7})</div>
                <div>Discount</div>
                <div>Type Discount</div>
              </div>
              <div className='col-4'>
                <div>: ${ TotalPrice()} </div>
                <div>: -${ }</div>
                <div>: -${ }</div>
              </div>
            </div>
            <div className='row mt-3 bg-warning'>
              <div className='d-flex justify-content-between align-items-center'>
                <h3>Order total</h3>
                <h3>${calculateTotalPrice()}</h3>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
