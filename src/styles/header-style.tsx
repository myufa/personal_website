import Styled from '@emotion/styled';

export const HeaderDiv = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    z-index:1;
    top: 0;
    transition: top 0.1s;
    background-color: rgb(10, 25, 47);
    font-size: 16px;
    font-family: 'Karla', sans-serif;
    font-style: normal;
    font-weight: normal;
    color: white;
    height: 70px;
`;

export const HeaderName = Styled.h1`
    font-family: 'Karla', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: white;
    margin-bottom: auto;
    margin-top: auto;
    margin-left: 20px;
`;

export const SmLinks = Styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 160px;
    max-width: 200px;
    margin-bottom: auto;
    margin-top: auto;
    margin-right: 20px;
    a{
        margin-left: 10px;
    }
`;

export const ResLink = Styled.span`
display: inline-block;
padding: 8px 20px;
margin-left: 10px;
a{
    font-size: 13px;
    font-weight: 500
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    margin: 0 auto;z
}    
border: solid 1px #50a9d1;
border-radius: 8px;
`;

export const PageLinks = Styled.div`
    margin: auto 0;
    a{
        font-size: 14px;
        font-weight: 700
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        color: white;
        margin: 10px auto;
        display: inline-block;
        padding: 8px 20px;
    }
`;