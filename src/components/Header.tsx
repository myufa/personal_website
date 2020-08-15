import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { SocialMediaIconsReact } from 'social-media-icons-react'
import { HeaderName, HeaderDiv, SmLinks, ResLink, PageLinks } from '../styles/header-style'

const githubUrl = 'https://github.com/myufa';
const linkedInUrl = 'https://www.linkedin.com/in/myufa/';

const resumeLink = 'michael_yufa_resume.pdf';

interface state {
    prevScrollpos: number,
    visible: Boolean,
    top: Boolean
}

class Header extends Component<{}, state> {
    constructor(props: any) {
        super(props);
    
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            top: false
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;
      
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
        const top = window.pageYOffset === 0;
      
        this.setState({
          prevScrollpos: currentScrollPos,
          visible: visible,
          top: top
        });
      };

    render(){
        return (
            <HeaderDiv css={css`
                ${this.state.visible ? `` : `top: -70px;`}
                ${this.state.top ? `` : `box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -10px;`}
                
            `}>
                <HeaderName >
                    Micheal Yufa-Zimilevich
                </HeaderName>
                <PageLinks>
                    <Link smooth to='#about'>
                        About
                    </Link>
                    <Link smooth to='#experience'>
                        Experience
                    </Link>
                    <Link smooth to='#projects'>
                        Projects
                    </Link>
                    <a href='mailto: michaelyufa@gmail.com' target='_blank' rel="noopener noreferrer">
                        Contact
                    </a>
                </PageLinks>
                <SmLinks>
                    <SocialMediaIconsReact 
                        icon='github' 
                        url={githubUrl}
                        iconSize="2"
                        size="35" 
                        roundness="50%" 
                        backgroundColor="rgba(22,79,104,1)" 
                    />
                    <SocialMediaIconsReact 
                        icon='linkedin' 
                        url={linkedInUrl}
                        iconSize="1"
                        size="35" 
                        roundness="50%" 
                        backgroundColor="rgba(22,79,104,1)" 
                    />
                    <ResLink>
                        <a href={resumeLink}>Resume</a>
                    </ResLink>
                </SmLinks>      

            </HeaderDiv>
        )
    }
}

export default Header;
