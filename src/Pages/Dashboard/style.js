import { HideImage } from "@mui/icons-material";
import styled, { keyframes } from "styled-components";

const gradient = keyframes`
0%{background-position:0% 5%}
    100%{background-position:100% 96%}
    
`;
const hidden = keyframes`
from{opacity:0;}
to{opacity:1;}
`;
export const HeaderDashboard = styled.div`
  padding-right: 20px;
  padding-top: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--light-grey);
  svg {
    position: absolute;
    right: 20px;
    height: 30px;
    width: 30px;
    color: red;
    transition: 0.5s;
    :hover {
      transform: scale(1.1);
    }
  }
  @media (min-width: 790px) {
    padding-top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 15vh;
    padding-left: 2vw;
    box-sizing: border-box;
  }
`;

export const ButtonsDashboard = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: "Sansita";
  font-weight: 400;
  font-style: normal;
  color: var(--dark-grey);
  font-weight: lighter;
  ul {
    display: flex;
    flex-direction: row;
    li {
      padding: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 0.5s;
      :hover {
        transform: scale(1.1);
      }
    }
  }
  img {
    margin: 0px 5px 0 20px;
    width: 2.5vh;
  }
  @media (min-width: 790px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-left: 2vw;
    box-sizing: border-box;
    ul {
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
    }
  }
`;

export const UserBox = styled.div`
  margin-right: 3vw;
  height: 10vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: "Sansita";
  svg {
    position: relative;
    right: 0px;
    height: 15px;
    width: 15px;
    color: black;
  }
  img {
    margin-left: 20px;
    width: 50px;
  }
  
  }
  @media (min-width: 790px) {
    padding-left: 2vw;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  background-color: var(--light-grey);
  display: flex;
  justify-content: center;
  width: 100%;
  /* @media (min-width:1190px){
      height: 90vh;
      } */
`;

export const Div = styled.div`
  background: var(--light-grey);
  height: 100vh;
  animation: ${hidden} 4s;
`;

export const Test = styled.div`
  background: linear-gradient(
    307deg,
    var(--white),
    var(--dark-medium-green),
    var(--light-green)
  );
  background-size: 600% 600%;
  animation: ${gradient} 3s;
`;