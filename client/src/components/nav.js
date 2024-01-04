import '../styles/nav.css';

import {Link} from 'react-router-dom'
import React from 'react'

export default function Nav() {
  return (
    <div className='nav-container'>
      <div className='drink-path'><Link to='/drink'>
        <div><img style={{ width : '22', height: "27"}}
        src='img/list.png'
        alt='술 꿀조합' />
        </div>
        <div className='menu'>
          술 꿀조합
        </div>
      </Link></div>
      <div className='home-path'><Link to='/'>
      <div><img style={{ width : '22', height: "27"}}
        src='/img/home.png'
        alt='홈' />
        </div>
        <div className='menu'>
          홈
        </div>
      </Link></div>
      <div className='food-path'><Link to='/food'>
      <div><img style={{ width : '22', height: "27"}}
        src='/img/squid.png'
        alt='안주 꿀조합' />
        </div>
        <div className='menu'>
          안주 꿀조합
        </div>
      </Link></div>
    </div>
  )
}
