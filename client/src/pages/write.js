import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// components 임포트
import Header from '../components/header';
import Slider from '../components/slider';

// css 임포트
import '../styles/write.css';
import '../styles/header.css';

export default function Write() {
  const history = useNavigate();

  const [title, setTitle] = useState('');
  const [drinkChecked, setDrinkChecked] = useState(false);
  const [foodChecked, setFoodChecked] = useState(false);
  const [selectedMainOptions, setSelectedMainOptions] = useState([]);
  const [selectedSubOptions, setSelectedSubOptions] = useState([]);
  const [ingredient, setIngredient] = useState('');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  //제목 입력
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

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
      case '전체':
        setSelectedSubOptions(['전체']);
        break;
      case '소주':
        setSelectedSubOptions(['소주']);
        break;
      case '맥주':
        setSelectedSubOptions(['맥주']);
        break;
      case '양주':
        setSelectedSubOptions(['와인', '진', '위스키', '데낄라']);
        break;
      case '기타':
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

  //준비물 입력
  const handleIngredientChange = (e) => {
    setIngredient(e.target.value);
  };

  //본문 입력
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  //사진 선택
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

      if (allowedExtensions.test(file.name)) {
        const reader = new FileReader();

        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };

        reader.readAsDataURL(file);
      } else {
        alert('jpg, jpeg, png 형식의 이미지만 선택할 수 있습니다.');
        // 선택된 파일 초기화
        handleImageCancel();
      }
    }
  };
  const handleImageCancel = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  //완료 - 제출하기 버튼
  const handleCompleteClick = (e) => {
    e.preventDefault();

    const formData = {
      title,
      content,
      picture:
        'https://file.hitejinro.com/hitejinro2016/upFiles/editor/sbQgOgJtnPSsTatVN0A0.jpg',
      tag: ingredient,
      name1: selectedMainOptions,
      name2: selectedSubOptions[0],
    };
    console.log(formData);

    if (
      !formData.title ||
      !formData.name1 ||
      !formData.name2 ||
      !formData.tag ||
      !formData.content ||
      !formData.picture
    ) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    fetch('http://3.39.93.237/liquorCombi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Server response:', data);
        handleCheckbox();
      })
      .catch((error) => {
        console.error('Error sending data to server:', error);
      });
  };

  const handleCheckbox = () => {
    if (!drinkChecked) {
      history.push(`/Food_detail`);
    } else history.push(`/Drink_detail`);
  };

  return (
    <div className="Container">
      <Header title="글쓰기" />
      <div className="ButtonDiv">
        <button className="xButton">x</button>
        <button className="completeButton" onClick={handleCompleteClick}>
          완료
        </button>
      </div>
      <input
        value={title}
        onChange={handleTitleChange}
        className="TitleInput"
        type="text"
        placeholder="제목"
      ></input>
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
      <div className="optionDiv">
        <div className="selectAlcohol">
          <select
            value={selectedMainOptions}
            onChange={(e) => handleSelectMainChange(e.target.value)}
          >
            <option value="전체">전체</option>
            <option value="소주">소주</option>
            <option value="맥주">맥주</option>
            <option value="양주">양주</option>
            <option value="기타">기타</option>
          </select>
          <select
            value={selectedSubOptions}
            onChange={(e) => handleSelectSubChange(e.target.value)}
          >
            {Array.isArray(selectedSubOptions) ? (
              selectedSubOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))
            ) : (
              <option value={selectedSubOptions}>{selectedSubOptions}</option>
            )}
          </select>
        </div>
      </div>
      <input
        value={ingredient}
        type="text"
        placeholder="이외에 필요한 재료를 작성해주세요."
        onChange={handleIngredientChange}
        className="selectIngredient"
      ></input>
      <textarea
        value={content}
        onChange={handleContentChange}
        placeholder="내용을 입력하세요."
        className="putContent"
        rows={13} // 필요에 따라 조절
      ></textarea>
      <div>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <button
          className="selectedImageBtn"
          onClick={() => fileInputRef.current.click()}
        >
          이미지 선택
        </button>
        {selectedImage && (
          <div className="selectedImage">
            <img
              src={selectedImage}
              alt="Selected"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
            <button className="deleteBtn" onClick={handleImageCancel}>
              선택 취소
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
