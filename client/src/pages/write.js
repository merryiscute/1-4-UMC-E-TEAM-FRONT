import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// components 임포트
import Header from '../components/header';

// css 임포트
import '../styles/detail.css';
import '../styles/header.css';

export default function Write() {
  const [drinkChecked, setDrinkChecked] = useState(false);
  const [foodChecked, setFoodChecked] = useState(false);
  const [selectedMainOptions, setSelectedMainOptions] = useState([]);
  const [selectedSubOptions, setSelectedSubOptions] = useState([]);

  // 술 조합법 or 안주 중 선택
  const handleDrinkCheckboxChange = () => {
    setDrinkChecked(!drinkChecked);
    if (!drinkChecked) {
      setFoodChecked(false);
    }
  };

  const handleFoodCheckboxChange = () => {
    setFoodChecked(!foodChecked);
    if (!foodChecked) {
      setDrinkChecked(false);
    }
  };

  // 주종 선택
  const handleSelectMainChange = (value) => {
    setSelectedMainOptions(value || '전체');
    switch (value) {
      case 'entire':
        setSelectedSubOptions(['전체']);
        break;
      case 'soju':
        setSelectedSubOptions(['소주']);
        break;
      case 'beer':
        setSelectedSubOptions(['맥주']);
        break;
      case 'liquor':
        setSelectedSubOptions(['와인', '진', '위스키', '데낄라']);
        break;
      case 'etc':
        setSelectedSubOptions(['막걸리']);
        break;
      default:
        setSelectedSubOptions(['전체']);
        break;
    }
  };
  const handleSelectSubChange = (value) => {
    setSelectedSubOptions(value);
  };

  return (
    <div className="Container">
      <Header title="글쓰기" />
      <div className="ButtonDiv">
        <button className="xButton">x</button>
        <button className="completeButton">완료</button>
      </div>
      <input className="TitleInput" type="text" placeholder="제목"></input>
      <div className="CheckboxDiv">
        <label>
          <input
            type="checkbox"
            checked={drinkChecked}
            onChange={handleDrinkCheckboxChange}
          />
          술 꿀조합
        </label>
        <label>
          <input
            type="checkbox"
            checked={foodChecked}
            onChange={handleFoodCheckboxChange}
          />
          안주 꿀조합
        </label>
      </div>
      <div className="Guide">메인이 되는 주종을 선택해주세요.</div>
      <select
        value={selectedMainOptions}
        onChange={(e) => handleSelectMainChange(e.target.value)}
      >
        <option value="entire">전체</option>
        <option value="soju">소주</option>
        <option value="beer">맥주</option>
        <option value="liquor">양주</option>
        <option value="etc">기타</option>
      </select>
      <select
        value={selectedSubOptions}
        onChange={(e) => handleSelectSubChange(e.target.value)}
      >
        {selectedSubOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
