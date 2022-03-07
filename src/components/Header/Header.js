import React from 'react';
import './Header.scss';
import banner from '../../assets/images/ricknmortytext.svg';

export default function Header() {
  return (
    <header className="header">
      <img src={banner} alt="" className="header__banner" />
    </header>
  );
}
