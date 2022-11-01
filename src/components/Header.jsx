import React from 'react'
import splitter from '../../public/images/logo.svg'

function Header() {
  return (
    <div>
        <div className='tip-header'>
            <img src={splitter} className='header-title' />
        </div>
    </div>
  )
}

export default Header