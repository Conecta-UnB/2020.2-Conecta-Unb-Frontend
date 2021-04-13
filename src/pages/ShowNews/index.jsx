import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NewsContext } from '../../contexts/news';
import './styles.css';

export default function ShowNews() {
  const { allNews, setNewsDetails } = useContext(NewsContext);
  useEffect(() => {
    console.log(allNews);
  }, [allNews]);
  return (
    <div className="NewsPage">
      <div className="NewsContainer">
        {allNews && allNews.map((item) => (
          <Link
            to="/news-details"
            className="News"
            onClick={async () => {
              await setNewsDetails(item);
            }}
          >
            <div className="NewsImage">{item.imagem}</div>
            <div className="NewsTitle">{item.titulo}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
