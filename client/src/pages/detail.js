import React, { useState, useEffect } from 'react';

// css 임포트
import '../styles/detail.css';

export default function Detail() {
  return (
    <div className="Container">
      <div className="Header">한잔해</div>
      <div className="MainContainer">
        <div className="InMainContainer">
          <img
            className="DrinkImg"
            src="https://cdn.designhouse.co.kr/cms/img/2023/06/M.1685668349.5849.5.jpg"
          />
          <div className="DrinkScript">
            <span className="DrinkName">켈리</span>
            <span className="DrinkDetail">도수: 4.5%</span>
            <span className="DrinkDetail">가격: 500ml 1550원</span>
            <span className="DrinkDetailScript">
              화이트 진로에서 2023년 4월 4일에 출시한 울몰트 라거 맥주이다.
              알코울 도수는 4.5%
            </span>
          </div>
        </div>
        <div className="HashNames">
          <span className="HashName">#맥주 #올몰트라거 #가성비</span>
        </div>
      </div>
      <div className="SubContainer">
        <span className="SubTitle">추천 조합법</span>
        <div className="TableViewDiv">
          <div className="TableViewCellDiv">
            <img
              className="CellDrinkImg"
              src="https://cdn.designhouse.co.kr/cms/img/2023/06/M.1685668349.5849.5.jpg"
            />
            <div className="TableViewCellSpanDiv">
              <span className="CellDrinkName">소주 + 맥주</span>
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
              <span className="CellHeart">32</span>
              <span className="HashName">#맥주 #소주</span>
            </div>
          </div>
          <div className="TableViewCellDiv">
            <img
              className="CellDrinkImg"
              src="https://cdn.designhouse.co.kr/cms/img/2023/06/M.1685668349.5849.5.jpg"
            />
            <div className="TableViewCellSpanDiv">
              <span className="CellDrinkName">소주 + 맥주</span>
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
              <span className="CellHeart">32</span>
              <span className="HashName">#맥주 #소주</span>
            </div>
          </div>
          <div className="TableViewCellDiv">
            <img
              className="CellDrinkImg"
              src="https://cdn.designhouse.co.kr/cms/img/2023/06/M.1685668349.5849.5.jpg"
            />
            <div className="TableViewCellSpanDiv">
              <span className="CellDrinkName">소주 + 맥주</span>
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
              <span className="CellHeart">32</span>
              <span className="HashName">#맥주 #소주</span>
            </div>
          </div>
          <div className="TableViewCellDiv">
            <img
              className="CellDrinkImg"
              src="https://cdn.designhouse.co.kr/cms/img/2023/06/M.1685668349.5849.5.jpg"
            />
            <div className="TableViewCellSpanDiv">
              <span className="CellDrinkName">소주 + 맥주</span>
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
              <span className="CellHeart">32</span>
              <span className="HashName">#맥주 #소주</span>
            </div>
          </div>
        </div>
      </div>
      <div className="SubContainer">
        <span className="SubTitle">어울리는 안주</span>
        <div className="TableViewDiv">
          <div className="TableViewCellDiv">
            <img
              className="CellDrinkImg"
              src="https://cdn.designhouse.co.kr/cms/img/2023/06/M.1685668349.5849.5.jpg"
            />
            <div className="TableViewCellSpanDiv">
              <span className="CellDrinkName">양파튀김</span>
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
              <span className="CellHeart">32</span>
              <span className="HashName">#맥주 #소주</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
