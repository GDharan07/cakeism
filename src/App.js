import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About'
import Order from './Component/Order';
import Cart from './Component/Cart';
import Login from './Component/Login';
import {MyProvider} from './MyContext/MyProvider'
function App() {
  // ayyoooo
  return (
    <div className="App">
    <MyProvider>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Order' element={<Order/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
        </Routes>
     </MyProvider>
    
    
    </div>
  );
}

export default App;


