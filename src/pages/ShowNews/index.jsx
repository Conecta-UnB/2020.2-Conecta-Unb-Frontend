import React, { useContext, useEffect } from 'react';
import { NewsContext } from '../../contexts/news';
import './styles.css';

export default function ShowNews() {
  const { allNews } = useContext(NewsContext);
  useEffect(() => {
    console.log(allNews);
  }, [allNews]);
  return (
    <div className="NewsPage">
      <div className="NewsContainer">
        {allNews && allNews.map((item) => (
          <div className="News">
            <div className="NewsImage">{item.imagem}</div>
            <div className="NewsTitle">{item.titulo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
