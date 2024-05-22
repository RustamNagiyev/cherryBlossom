import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Catalog from './components/Catalog';
import Contacts from './components/Contacts';
import OurCollections from './components/Our-Collections';
import Nav from './components/general/Nav';
import Footer from './components/general/Footer';
import Search from './components/Search';
import Login from './components/general/Nav/Login';
import Register from './components/general/Nav/Register';
import Flowers from './components/Flowers';
import ProductPage from './components/ProductPage';
import Bucket from './components/Bucket';



function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/about' element={<About />} />
        <Route index path='/catalog' element={<Catalog />} />
        <Route index path='/contacts' element={<Contacts />} />
        <Route index path='/ourcollections' element={<OurCollections />} />
        <Route index path='/search' element={<Search />} />
        <Route index path='/register' element={<Register />} />
        <Route index path='/login' element={<Login />} />
        <Route index path='/flowers' element={<Flowers />} />
        {/* <Route index path='/product-page' element={<ProductPage />} /> */}
        <Route index path='/product-page/:pId' element={<ProductPage />} />
        <Route index path='/bucket-page' element={<Bucket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
