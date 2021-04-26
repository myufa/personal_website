import * as React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { Language } from '../../styles/about-style'

const aboutText = "I make web applications (and occasionally other things)";
const profilePicUrl = "https://raw.githubusercontent.com/myufa/personal_website/master/public/me.jpg";
const codingLanguages = ["Javascript", "Python", "C++", "C", "SQL"];
const languages = ["English", "Russian"];

const AboutPage: React.FC = () => {
    return (
        <div id="About" css={css`
            display: flex;
            justify-content: center;
            align-items: center; 
            position: relative;
            margin: 0 auto;
            padding-top: 70px;
            padding-bottom: 180px;
            width: 900px;
            color: rgb(204, 214, 246);
            text-align: center;
            height: fit-content;
        `}
        >
            <div className="content" css={css`
                width: fit-content;
            `}>
                <img 
                    src={profilePicUrl} 
                    alt="Michael Yufa-Zimilevich" 
                    className="profilePic" 
                    css={css`
                        width: 120px;
                        height: 120px;
                        border: 10px solid rgb(5, 18, 37);
                        border-radius: 1000px;
                    `}
                />
                <h1 css={css`
                    font-size: 50px;
                    margin-top: 20px;
                    margin-bottom: 10px;
                `}
                >
                    Hi, I'm Michael!
                </h1>
                <p css={css`
                    font-size: 14px;
                    border: solid 1px #50a9d1;
                    border-radius: 8px;
                    width: fit-content;
                    margin: 0 auto;
                    padding: 7px 18px;
                `}>
                    Senior at Umich. Hire me out of grad!
                </p>
                <p css={css`
                    font-size: 20px;
                    margin-bottom: 60px;
                `}>
                    {aboutText}
                </p>
                <p css={css`
                    font-size: 16px;
                `}>
                    I can code in {codingLanguages.length} different languages
                </p>
                {codingLanguages.map((cl, index)=>(<Language key={index}>{cl}</Language>))}
                <p css={css`
                    font-size: 16px;
                `}>
                    and speak in {languages.length}
                </p>
                {languages.map((l, index)=>(<Language key={index}>{l}</Language>))}


            </div>
            
        </div>
    )
}


export default AboutPage;