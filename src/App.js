import logo from './logo.svg';

import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products/Products';
import Blogs from './Components/Blog/Blog';
import AboutUs from './Components/AboutUs/AboutUs';
import AddProduct from './Components/AddProduct/AddProduct';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import SocialLogin from './Components/SocialLogin/SocialLogin';
import Update from './Components/Update/Update';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import MyItems from './Components/MyItems/MyItems';
import ManageItem from './Components/ManageItem/ManageItem';
import { ToastContainer } from 'react-toastify';
import LimitedProducts from './Components/LimitedProducts/LimitedProducts';
import Blog from './Components/Blog/Blog';
import PageNotFound from './Components/Shared/404/PageNotFound';
import PasswordReset from './Components/PasswordReset/PasswordReset';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/limitedProducts' element={<LimitedProducts></LimitedProducts>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>


        <Route path='/add' element={<RequireAuth><AddProduct></AddProduct></RequireAuth>}></Route>
        <Route path='/update' element={<RequireAuth><UpdateProduct></UpdateProduct></RequireAuth>}></Route>
        <Route path='/updateBook/:id' element={<RequireAuth><Update></Update></RequireAuth>}></Route>
        <Route path='/myItems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/manageItem/:id' element={<RequireAuth><ManageItem></ManageItem> </RequireAuth>}></Route>



        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/socialLogin' element={<SocialLogin></SocialLogin>}></Route>
        <Route path='/passwordReset' element={<PasswordReset></PasswordReset>}></Route>

        <Route path='/*' element={<PageNotFound></PageNotFound>}></Route>





      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;


