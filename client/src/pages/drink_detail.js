import Header from '../components/header';
import React from 'react';
import Slider from '../components/slider';
import '../styles/write_detail.css';
import { useLocation } from 'react-router-dom';

export default function DrinkDetail() {
  const location = useLocation();
  const drinkData = location.state;
  console.log(drinkData);

  return (
    <div className="Container">
      <Header title={'술 꿀조합'}></Header>
      <Slider></Slider>

      <div className="TitleName">소맥</div>
      <hr></hr>
      <div className="Ingredient">#소주 #맥주</div>
      <hr></hr>
      <div className="Content">
        <div className="ContentText">
          소주 3 : 맥주 7 의 비율로 구성되어 있습니다.
        </div>
        <img
          src="https://cdn.designhouse.co.kr/cms/img/2023/06/M.1685668349.5849.5.jpg"
          alt="ContentIMG"
          style={{ maxWidth: '100%', maxHeight: '200px' }}
        />
        <hr></hr>
      </div>
    </div>
  );
}
