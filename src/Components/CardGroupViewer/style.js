import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Sansita One";
  width: 100%;

  h2 {
    font-size: 24px;
    margin-bottom: 15px;
  }
  svg {
    margin: 0 5px;
  }
  #goals {
    margin: 20px;
    color: var(--dark-medium-red);
    h2 {
      display: flex;
      align-items: center;
      img {
        width: 25px;
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
  #activities {
    margin: 20px;
    color: var(--dark-orange);
    h2 {
      display: flex;
      align-items: center;
      img {
        width: 25px;
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
`;

export const Title = styled.div`
  color: var(--dark-blue);
  display: flex;
  flex-direction: column;
  text-align: end;
  margin-left: 800px;
  h1 {
    font-size: 32px;
  }
  margin: 20px 20px 10px 20px;
`;

export const Div = styled.div`
  display: flex;
  overflow-x: scroll;
  align-items: flex-start;
  &::-webkit-scrollbar {
    width: 12px;
    height: 9px;
  }
  &::-webkit-scrollbar-track {
    background: var(--light-grey);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--dark-medium-red);
    border-radius: 20px;
  }
`;

export const Description = styled.div`
  color: var(--dark-grey);
  text-align: end;
  margin-left: 80vw;
  h3 {
    font-size: 26px;
  }
  margin: 5px 20px;
`;
