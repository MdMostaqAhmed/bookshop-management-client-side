import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products/Products';
import Blogs from './Components/Blogs/Blogs';
import AboutUs from './Components/AboutUs/AboutUs';
import AddProduct from './Components/AddProduct/AddProduct';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import SocialLogin from './Components/SocialLogin/SocialLogin';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>


        <Route path='/add' element={<AddProduct></AddProduct>}></Route>
        <Route path='/update' element={<UpdateProduct></UpdateProduct>}></Route>


        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/socialLogin' element={<SocialLogin></SocialLogin>}></Route>



      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
