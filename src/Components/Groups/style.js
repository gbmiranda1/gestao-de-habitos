import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: var(--light-grey);
  height: 100vh;
  width: 100%;
`;

export const Div = styled.div`
  padding: 20px 15px 40px 15px;
  @media (min-width: 790px) {
    padding: 20px 60px 40px 60px;
  }
`;
export const DivButton = styled.div`
  background: var(--light-grey);
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    width: 90%;
    align-self: center;
    margin-bottom: 25px;
    transition: 0.5s;
    :hover {
      background: var(--dark-medium-green);
    }
  }
`;

export const DivName = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding-bottom: 25px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h3 {
    color: var(--dark-grey);
    font-family: "Sansita", sans-serif;
    font-weight: 700;
    font-size: 25px;
    margin-left: 15px;
    padding-bottom: 8px;
  }
  img {
    margin-right: 10px;
  }
  select {
    color: var(--dark-grey);
    font-family: "Sansita", sans-serif;
    font-weight: 700;
    font-size: 22px;
  }
  svg {
    margin-left: 20px;
    transition: 0.5s;
    :hover {
      transform: scale(1.4);
    }
  }
  .cursor {
    width: 25px;
    height: 25px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 20px;
  height: 100vh;
  background: var(--light-grey);
  box-sizing: border-box;
`;

export const CardsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: var(--light-grey);
`;

export const NotCards = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 40px;
    font-family: "Sansita", sans-serif;
  }
`;
