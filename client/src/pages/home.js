import React,{useEffect, useState} from 'react'
import '../styles/home.css';
import Header from '../components/header'
import Axios from "axios";
import { Link } from 'react-router-dom';
import Slider from '../components/slider';

export function Home() {

const axios = require('axios');
async function getValue() {
  try{
      const response = await Axios.get('http://3.39.93.237/liquor');
      console.log(response.data.result)
      setData(response.data.result)
  }catch(e){console.log(e);}
}


useEffect(()=>{
  getValue();
},[])   

  const [data,setData] = useState([]);

  return (
    <div className='home'>
      <Header title={"한잔해"}></Header>
      <div className='search'>
        <input className='input' placeholder='원하시는 술을 검색해보세요.'></input>
        <div className='search_icon'><img src='img/Vector43.png'/></div>
        <div className='search_icon'><img src='img/Search.png'/></div>
      </div>
      <div className='slider'><Slider></Slider></div>
      <div className='contents_container'>
        <div className='contents'>
          {data.map((key,index)=>{
            return(
              <Link to={'/detail'} state={{name:"이하은"}}><Contents data={data[index]}></Contents></Link>
            )
          })}
        </div>
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
      <div className='data_container'>
        <div className='name'>{data.name}</div>
        <div className='percent'>{data.percent}</div>
        <div className='price_volume'>{data.price}/{data.volume}</div>
        <div className='tag'>{data.tag}</div>
      </div>
    </div>
  )
}