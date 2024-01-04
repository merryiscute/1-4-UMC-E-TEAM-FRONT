import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Detail from './pages/detail';
import { Drink } from './pages/drink';
import Food from './pages/food';
import { Home } from './pages/home';
import Nav from './components/nav';
import NotFound from './pages/notFound';
import Write from './pages/write';
import WriteDetail from './pages/write_detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/detail' element={<Detail></Detail>}></Route>
        <Route path='/drink' element={<Drink></Drink>}></Route>
        <Route path='/food' element={<Food></Food>}></Route>
        <Route path='/write' element={<Write></Write>}></Route>
        <Route path='/write_detail' element={<WriteDetail></WriteDetail>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
