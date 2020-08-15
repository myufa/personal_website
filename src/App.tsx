import React from 'react';
import WorkList from './components/WorkExperience/WorkList';
import ProjectList from './components/Projects/ProjectList'
import Header from './components/Header'
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import AboutPage from './components/About/About';

// const background_url = "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzA0MzRjZGI4MTJlNjdkMzBmNV93aW5kb3dzX3hwX2JsaXNzLXdpZGUuanBnIl0sWyJwIiwiY29udmVydCIsIiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXSxbInAiLCJ0aHVtYiIsIjc4MHg1MjAjIl1d/windows_xp_bliss-wide.jpg";

const App: React.FC = () => {
  return (
    <div id="about" css={css`
      padding-top: 70px;
      height: 100%;
      background-color: rgb(10, 25, 47);
    `}>
      <Header />
      <div css={css`
        width: 1000px;
        margin: 0 auto;
      `}>
        <AboutPage />
        <WorkList />
        <ProjectList />
      </div>              
    </div>    
  );
}

export default App;
