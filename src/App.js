import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const setCartCount = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <marquee> <h1 className='text-success'>Hello, Fake Store Shop</h1></marquee>
      <AllProducts setCartCount={setCartCount}></AllProducts>
    </div>
  );
}


export default App;
