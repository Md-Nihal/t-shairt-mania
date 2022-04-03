
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import GrandPa from './components/GrandPa/GrandPa'
import ReviewOrder from './components/ReviewOrder/ReviewOrder';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<ReviewOrder></ReviewOrder>}></Route>
        <Route path='/grandpa' element={<GrandPa></GrandPa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
