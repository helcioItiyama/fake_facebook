import React from 'react';
import {IoMdContact} from 'react-icons/io';

import './FaceHeader.css';
import facebook from '../assets/facebook.svg';

export default function FaceHeader() {
    return (
    <div className="header">
      <img src={facebook} href="/"/>
      <div className="profile">
        <a href="#">Meu Perfil</a>
        <IoMdContact size="24px"/>
      </div>
    </div>
    )
}