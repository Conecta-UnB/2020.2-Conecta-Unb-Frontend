import React, { useContext, useEffect } from 'react';
import { NewsContext } from '../../contexts/news';
import './styles.css';

export default function ShowNews() {
  const { news } = useContext(NewsContext);
  useEffect(() => {
  }, [news]);
  return (
    <div className="NewsDetailsPage">
      <div className="NewsDetails">
        <div className="NewsDetailsTitle">{news.titulo}</div>
        <div className="NewsDetailsAuthor">{news.autor}</div>
        <div className="NewsDetailsImage">{news.imagem}</div>
        <div className="NewsDetailsContent">{news.conteudo}</div>
      </div>
    </div>
  );
}
