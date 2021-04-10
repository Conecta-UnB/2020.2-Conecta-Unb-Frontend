import React, { createContext, useContext } from 'react';
import * as NewsService from '../services/news';
import { UserContext } from './user';

export const NewsContext = createContext({});

// eslint-disable-next-line react/prop-types
export default function NewsProvider({ children }) {
  const { user } = useContext(UserContext);
  const Host = 'http://localhost:3333';

  async function createNews(newsInfo) {
    console.log('news info =', newsInfo, user);
    console.log('user info =', user);
    const response = await NewsService.createNews(Host, newsInfo, user.matricula);
    return response;
  }

  return (
    <NewsContext.Provider
      value={{
        createNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
