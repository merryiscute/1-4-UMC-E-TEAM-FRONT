import React from 'react';

// components 임포트
import Header from '../components/header';
import Slider from '../components/slider';

export default function WriteDetail() {
  <div className="Container">
    <Header title="술 꿀조합" />
    <Slider></Slider>

    <div className="TitleName">소맥</div>
    <div className="Ingredient">#소주 #맥주</div>
    <div className="Content">
      <div className="ContentText">
        소주 3 : 맥주 7 의 비율로 구성되어 있습니다.
      </div>
      <img
        src="https://cdn.designhouse.co.kr/cms/img/2023/06/M.1685668349.5849.5.jpg"
        alt="ContentIMG"
        style={{ maxWidth: '100%', maxHeight: '200px' }}
      />
    </div>
  </div>;
}
