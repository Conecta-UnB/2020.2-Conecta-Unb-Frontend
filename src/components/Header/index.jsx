import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { NewsContext } from '../../contexts/news';

import './styles.css';
import unbFgaLogo from '../../assets/unbFgaLogo.jpeg';

export default function Header() {
  const { getAllNews } = useContext(NewsContext);
  return (
    <div className="componentHeader">
      <div id="pages">
        <div id="ConectaUnb">
          ConectaUnB
        </div>
        <Link to="/">
          Home
        </Link>
        <Link
          onClick={async () => {
            await getAllNews();
          }}
          to="/news"
        >
          Notícias
        </Link>
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
