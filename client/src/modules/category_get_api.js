import axios from 'axios';


const url = "";

const axios = require('axios');

// 지정된 ID를 가진 유저에 대한 요청
axios.get(url+"/liquor")
  .then(function (res) {
    // 성공 핸들링
    console.log(res);
  })
  .catch(function (error) {
    // 에러 핸들링
    console.log("메인페이지 데이터를 get하지 못했습니다.");
    console.log(error)
  })
  .finally(function () {
    // 항상 실행되는 영역
  });