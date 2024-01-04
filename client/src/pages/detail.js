import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
// components 임포트
import Header from '../components/header';

// css 임포트
import '../styles/detail.css';
import '../styles/header.css';

export default function Detail() {
  const [drinkData, setDrinkData] = useState(null);
  const [combinationData, setCombinationData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const data = useLocation();
  console.log(data)

  useEffect(() => {
    // 가상의 API 응답 데이터
    const fakeDrinkApiResponse = {
      id: 1,
      name: '켈리',
      alcohol: 4.5,
      price: '500ml 1550원',
      description:
        '화이트 진로에서 2023년 4월 4일에 출시한 울몰트 라거 맥주이다. 알코올 도수는 4.5%',
      image:
        'https://cdn.designhouse.co.kr/cms/img/2023/06/M.1685668349.5849.5.jpg',
      tags: '#맥주 #올몰트라거 #가성비',
    };
    const fakeCombinationApiResponse = [
      { id: 1, name: '소주 + 맥주', hearts: 32, tag: '#맥주일까 #소주일까' },
      { id: 1, name: '맥주 + 콜라', hearts: 32, tag: '#맥주 #소주' },
      { id: 1, name: '맥주 + 맥주', hearts: 32, tag: '#맥주 #소주' },
      { id: 1, name: '맥주 + 사이다', hearts: 32, tag: '#맥주 #소주' },
    ];
    const fakeFoodApiResponse = [
      { id: 1, name: '양파튀김', hearts: 32, tag: '#맥주 #소주' },
      { id: 1, name: '양파감자', hearts: 32, tag: '#맥주 #소주' },
      { id: 1, name: '양파쿵야', hearts: 32, tag: '#맥주 #소주' },
      { id: 1, name: '양파파채', hearts: 32, tag: '#맥주 #소주' },
    ];

    setDrinkData(fakeDrinkApiResponse);
    setCombinationData(fakeCombinationApiResponse);
    setFoodData(fakeFoodApiResponse);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Container">
      <Header title="한잔해" />
      <div className="MainContainer">
        <div className="InMainContainer">
          <img
            className="DrinkImg"
            src="https://cdn.designhouse.co.kr/cms/img/2023/06/M.1685668349.5849.5.jpg"
          />
          <div className="DrinkScript">
            <span className="DrinkName">{drinkData.name}</span>
            <span className="DrinkDetail">도수: {drinkData.alcohol}%</span>
            <span className="DrinkDetail">가격: {drinkData.price}</span>
            <span className="DrinkDetailScript">{drinkData.description}</span>
          </div>
        </div>
        <div className="HashNames">
          <span className="HashName">{drinkData.tags}</span>
        </div>
      </div>
      <div className="SubContainer">
        <span className="SubTitle">추천 조합법</span>
        <div className="TableViewDiv">
          {combinationData.map((item) => (
            <Link
              key={item.id}
              to={`/drink/${item.id}`}
              className="TableViewCellLink"
            >
              <div key={item.id} className="TableViewCellDiv">
                <img
                  className="CellDrinkImg"
                  src={drinkData.image}
                  alt={drinkData.name}
                />
                <div className="TableViewCellSpanDiv">
                  <span className="CellDrinkName">{item.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ff0000"
                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                    />
                  </svg>
                  <span className="CellHeart">{item.hearts}</span>
                  <span className="HashName">{item.tag}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="SubContainer">
        <span className="SubTitle">어울리는 안주</span>
        <div className="TableViewDiv">
          {foodData.map((item) => (
            <Link
              key={item.id}
              to={`/food/${item.id}`}
              className="TableViewCellLink"
            >
              <div key={item.id} className="TableViewCellDiv">
                <img
                  className="CellDrinkImg"
                  src={drinkData.image}
                  alt={drinkData.name}
                />
                <div className="TableViewCellSpanDiv">
                  <span className="CellDrinkName">{item.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ff0000"
                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                    />
                  </svg>
                  <span className="CellHeart">{item.hearts}</span>
                  <span className="HashName">{item.tag}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
