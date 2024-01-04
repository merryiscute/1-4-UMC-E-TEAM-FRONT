import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import '../styles/drink.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export function Drink() {
  const axios = require('axios');
  async function getValue() {
    try {
      const response = await Axios.get('http://3.39.93.237/liquorCombiPost');
      console.log(response.data.result);
      setData(response.data.result);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getValue();
  }, []);

  const [data, setData] = useState([
    {
      liquorFood_Id: 4,
      title: '맛있따1',
      tag: '1231',
      likes: 30,
    },
    {
      liquorFood_Id: 5,
      title: '맛있따2',
      tag: '1231',
      likes: 20,
    },
    {
      liquorFood_Id: 6,
      title: '맛있따3',
      tag: '1231',
      likes: 10,
    },
    {
      liquorFood_Id: 5,
      title: '맛있따2',
      tag: '1231',
      likes: 20,
    },
    {
      liquorFood_Id: 6,
      title: '맛있따3',
      tag: '1231',
      likes: 10,
    },
  ]);

  return (
    <div className="drink">
      <Header title={'술꿀조합'}></Header>
      <div className="search">
        <input
          className="input"
          placeholder="원하시는 술을 검색해보세요."
        ></input>
        <div className="search_icon">
          <img src="img/Vector43.png" />
        </div>
        <div className="search_icon">
          <img src="img/Search.png" />
        </div>
      </div>
      <div className="slider"></div>
      <div className="contents_container">
        <div className="contents">
          {data.map((key, index) => {
            return (
              <Link to="/Drink_detail" state={data[index].liquirCombi_id}>
                <Contents data={data[index]}></Contents>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="nav"></div>

      <Link to="/write">
        <div className="writeBtn">나만의 꿀조합 공유하기</div>
      </Link>
    </div>
  );
}

function Contents({ data }) {
  return (
    <div className="comContents">
      <img className="img" src={data.img} />
      <div className="data_container">
        <div className="title">{data.title}</div>
        <div className="likes">♥ {data.likes}</div>
        <div className="tag">{data.tag}</div>
      </div>
    </div>
  );
}
