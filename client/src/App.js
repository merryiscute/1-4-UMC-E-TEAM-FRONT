import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Detail from './pages/detail';
import { Drink } from './pages/drink';
import Food from './pages/food';
import { Home } from './pages/home';
import Nav from './components/nav';
import NotFound from './pages/notFound';
import Write from './pages/write';
import DrinkDetail from './pages/drink_detail';
import FoodDetail from './pages/food_detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/detail" element={<Detail></Detail>}></Route>
          <Route path="/drink" element={<Drink></Drink>}></Route>
          <Route path="/food" element={<Food></Food>}></Route>
          <Route path="/write" element={<Write></Write>}></Route>
          <Route
            path="/Food_detail"
            element={<FoodDetail></FoodDetail>}
          ></Route>
          <Route
            path="/Drink_detail"
            element={<DrinkDetail></DrinkDetail>}
          ></Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
