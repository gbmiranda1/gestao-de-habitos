import styled, { keyframes } from "styled-components";

const Anim = keyframes`
from{transform:scale(0)}
to{transform:scale(1)}

`;

export const Container = styled.div`
  width: 255px;
  height: 300px;
  position: relative;
  margin-bottom: 25px;
  background-color: var(--light-medium-blue);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font: unset;
  color: var(--white);
  border-radius: 30px;
  margin-left: 10px;
  transition: 0.5s;
  :hover {
    transform: TranslateY(-10px);
  }
  .icone {
    padding-top: 20px;
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
  .animation {
    transition: 0.5s;
    :hover {
      transform: scale(1.5);
    }
  }
  Button {
    width: 130px;
    font: bold;
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 19px;
    background-color: ${(props) =>
      props.color ? "var(--dark-orange)" : "#9E9E9E"};
  }
  animation: ${Anim} 1s;
  @media (min-width: 768px) {
    height: 345px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  border-bottom: 1px solid white;
  margin-bottom: 10px;
  font-family: "Sansita", sans-serif;
  cursor: pointer;
  figure {
    margin: 15px 0px;
    cursor: pointer;
  }
  h2 {
    font-weight: bold;
    font-size: 23px;
    margin-bottom: 10px;
  }
  span {
    margin-bottom: 10px;
    font: unset;
  }
  p {
    margin-bottom: 15px;
  }
  @media (min-width: 768px) {
    align-items: center;
    p {
      text-align: center;
    }
  }
`;

export const DescriptionGroup = styled.div`
  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  @media (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 10px;
  }

  figure img {
    width: 60px;
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0px;
  span {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  p {
    font-weight: bold;
  }
`;
