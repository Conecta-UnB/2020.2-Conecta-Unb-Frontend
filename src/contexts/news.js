import React, { createContext, useContext, useState } from 'react';
import * as NewsService from '../services/news';
import { UserContext } from './user';

export const NewsContext = createContext({});

// eslint-disable-next-line react/prop-types
export default function NewsProvider({ children }) {
  const { user } = useContext(UserContext);
  const Host = 'http://localhost:3333';
  const [allNews, setAllNews] = useState('');

  async function createNews(newsInfo) {
    console.log('news info =', newsInfo, user);
    console.log('user info =', user);
    const response = await NewsService.createNews(Host, newsInfo, user.matricula);
    return response;
  }

  async function getAllNews() {
    const response = await NewsService.getAllNews(Host);
    setAllNews(response.data.news);
    console.log(response.data.news);
    return response;
  }

  return (
    <NewsContext.Provider
      value={{
        createNews,
        getAllNews,
        allNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
