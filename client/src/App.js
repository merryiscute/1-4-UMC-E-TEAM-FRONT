import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import Detail from './pages/detail';
import { Drink } from './pages/drink';
import Food from './pages/food';
import Write from './pages/write';
import WriteDetail from './pages/write_detail';
import NotFound from './pages/notFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/detail' element={<Detail></Detail>}></Route>
        <Route path='/drink' element={<Drink></Drink>}></Route>
        <Route path='/food' element={<Food></Food>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/write' element={<Write></Write>}></Route>
        <Route path='/write_detail' element={<WriteDetail></WriteDetail>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
