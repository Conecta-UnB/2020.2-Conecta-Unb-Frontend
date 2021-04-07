import React from 'react';
import './styles.css';
import unbFgaLogo from '../../assets/unbFgaLogo.jpeg';

export default function Header() {
  return (
    <div className="componentHeader">
      <div id="pages">
        <div id="ConectaUnb">
          ConectaUnB
        </div>
        <a href="none">
          Home
        </a>
        <a href="none">
          Notícias
        </a>
        <a href="none">
          Eventos
        </a>
        <a href="none">
          EJs
        </a>
        <a href="none">
          Fórum
        </a>
        <a href="none" className="headerPages">
          Perfil
        </a>
      </div>
      <div id="img">
        <img src={unbFgaLogo} alt="unbFgaLogoImage" />
      </div>
    </div>
  );
}
