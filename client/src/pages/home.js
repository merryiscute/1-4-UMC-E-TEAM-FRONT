import React,{useEffect, useState} from 'react'
import '../styles/home.css';


export function Home() {

  const [data,setData] = useState([
    {
        "name": "켈리",
        "percent": "도수: 10%",
        "price": "12000원",
        "volume": "500ml",
        "tag": "#맥주 #라거",
        "liquor_Id": 1
    },
    {
        "name": "카스",
        "percent": "도수: 12%",
        "price": "1200원",
        "volume": "500ml",
        "tag": "#맥주 #라거",
        "liquor_Id": 2
    },
    {
      "name": "켈리",
      "percent": "도수: 10%",
      "price": "12000원",
      "volume": "500ml",
      "tag": "#맥주 #라거",
      "liquor_Id": 1
  },
  {
      "name": "카스",
      "percent": "도수: 12%",
      "price": "1200원",
      "volume": "500ml",
      "tag": "#맥주 #라거",
      "liquor_Id": 2
  }
])
  return (
    <div className='home'>
      <div className='title'></div>
      <div className='search'>
        <input className='input'></input>
        <div className='line'></div>
        <div className='serch_icon'></div>
      </div>
      <div className='slider'></div>
      <div className='contents'>
        {data.map((key,index)=>{
          return(
            <Contents data={data[index]}></Contents>
          )
        })}
      </div>
      <div className='nav'></div>
    </div>
  )
}


// function User(props) {

// }

function Contents({data}) {
  return(
    <div className='comContents'>
      <img className='img' src={data.img}/>
      <div className='name'>{data.name}</div>
      <div className='percent'>{data.percent}</div>
      <div className='price_volume'>{data.price}/{data.volume}</div>
      <div className='tag'>{data.tag}</div>
    </div>
  )
}