import '../styles/slider.css';

import React, { useState } from 'react';

export default function Slider() {
  const [selectedDrink, setSelectedDrink] = useState('all');
  const [selectedDetail, setSelectedDetail] = useState('');

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value);
    if (event.target.value === 'etc') {
      setSelectedDetail('makgeolli');
    } else {
      setSelectedDetail('');
    }
  };

  const handleDetailChange = (event) => {
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
