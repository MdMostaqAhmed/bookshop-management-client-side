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
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
