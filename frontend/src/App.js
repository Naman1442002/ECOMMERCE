import './App.css';
import  Home from './Component/Pages/Home'
import { fetchItems } from "./Component/Redux/Action";
import { useDispatch } from 'react-redux';
import {Route,Routes } from 'react-router-dom'
import ProductCatelog from './Component/Pages/Product';
import Cart from './Component/Pages/Cart';
import Registration from './Component/Pages/Registration';
import MyApp from './Component/MyApp';
import Login from './Component/Pages/Login';

function App() {
  const dispatch=useDispatch()
  dispatch(fetchItems());
  return (

    <div className="App">

          
    <Routes>
        <Route path="/" element={<Registration/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path='/MyApp' element={<MyApp/>}>
        <Route path='/MyApp/Home' element={<Home/>}/>
        <Route path='/MyApp/Products' element={<ProductCatelog/>}/>
        <Route path='/MyApp/Cart' element={<Cart/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
