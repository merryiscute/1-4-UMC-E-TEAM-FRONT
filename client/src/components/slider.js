import '../styles/slider.css';

import React, { useState } from 'react';

export default function Slider(props) {
  console.log(props)
  
  const [selectedDrink, setSelectedDrink] = useState('all');
  const [selectedDetail, setSelectedDetail] = useState('');

  function categoryUpdate(){
    if(selectedDrink == "soju")
    {props.setCategory(1)}
    if(selectedDrink == "beer")
    {props.setCategory(2)}
    if(selectedDrink == "liquor")
    {
      if(selectedDetail == "whisky")
      {props.setCategory(3)}
      if(selectedDetail == "wine")
      {props.setCategory(4)}
      if(selectedDetail == "gin")
      {props.setCategory(5)}
      if(selectedDetail == "tequila")
      {props.setCategory(6)}
    }
    if(selectedDrink == "etc")
    {props.setCategory(7)}
    
  }

  const handleDrinkChange = (event) => {
    categoryUpdate();
    setSelectedDrink(event.target.value);
    if (event.target.value === 'etc') {
      setSelectedDetail('makgeolli');
    } else {
      setSelectedDetail('');
    }
  };

  const handleDetailChange = (event) => {
    categoryUpdate();
    setSelectedDetail(event.target.value);
  };

  return (
    <div className="select-container">
      <div className="main-select">
        <div className="select-name">주종</div>
        <select
          name="drink-select"
          value={selectedDrink}
          onChange={handleDrinkChange}
        >
          <option value="all">전체</option>
          <option value="soju">소주</option>
          <option value="beer">맥주</option>
          <option value="liquor">양주</option>
          <option value="etc">기타</option>
        </select>
      </div>

      <div className="detail-select">
        <div className="select-name">세부주종</div>
        <select
          name="detail-select"
          value={selectedDetail}
          onChange={handleDetailChange}
          disabled={selectedDrink !== 'liquor' && selectedDrink !== 'etc'}
        >
          {selectedDrink === 'liquor' && (
            <>
              <option value="">전체</option>
              <option value="wine">와인</option>
              <option value="gin">진</option>
              <option value="whisky">위스키</option>
              <option value="tequila">데낄라</option>
            </>
          )}
          {selectedDrink === 'etc' && <option value="makgeolli">막걸리</option>}
        </select>
      </div>
    </div>
  );
}
