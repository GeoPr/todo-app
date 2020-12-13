import React from 'react'
import './Header.scss'

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__body">
        <h1 className="header__title">todo</h1>
        <div className="header__icon">
					<img src="images/icon-sun.svg" alt="" />
				</div>
      </div>
    </div>
  )
}
