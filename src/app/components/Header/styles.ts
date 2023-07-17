import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div#logo__holder {
    border: 2px solid ${(props) => props.theme["pink-300"]};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.25rem;
    height: 50px;

    & > h2 {
      color: ${(props) => props.theme["pink-300"]};
      font-weight: bold;
      letter-spacing: 0.2rem;
    }
  }
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background-color: ${(props) => props.theme["pink-500"]};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["pink-700"]};
    transition: background-color 0.5s;
  }
`;
