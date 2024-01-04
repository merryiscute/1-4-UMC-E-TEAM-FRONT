import Header from '../components/header';
import React, { useState, useEffect } from 'react';
import Slider from '../components/slider';
import '../styles/write_detail.css';
import Axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function FoodDetail() {
  const location = useLocation();
  const foodData = location.state;
  console.log('foodData: ', foodData);

  const [data, setData] = useState(null);

  async function getValue() {
    try {
      const response = await Axios.get(
        `http://3.39.93.237/liquor/liquorFoodPost/${foodData}`
      );
      console.log(response.data.result);
      setData(response.data.result);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getValue();
  }, [foodData]);

  return (
    <div className="Container">
      <Header title={'술 꿀조합'} />
      <Slider />

      {data && (
        <div>
          <div className="TitleName">{data.title}</div>
          <hr />
          <div className="Ingredient">{data.tag}</div>
          <hr />
          <div className="Content">
            <div className="ContentText">{data.contents}</div>
            <img
              src={data.picture}
              alt="ContentIMG"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
            <hr />
          </div>
        </div>
      )}
    </div>
  );
}
