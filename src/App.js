import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import All from './components/All';
import Cat from './components/Cat';
import Tint from './components/Tint';
import Circle from './components/Circle';
import Square from './components/Square'
import Detail from './pages/Detail'
import Cart from './components/Cart';



function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/all' element={<All/>}/>
        <Route path='/cat' element={<Cat/>}/>
        <Route path='/tint' element={<Tint/>}/>
        <Route path='/circle' element={<Circle/>}/>
        <Route path='/square' element={<Square/>}/>
        <Route path='/circle/detail' element={<Detail/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
