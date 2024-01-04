import '../styles/header.css';

import React from 'react'

export default function Header(props) {
  return (
    <div className='header-container'>
      <div className='header'>
        {props.title}
      </div>
    </div>
  )
}

