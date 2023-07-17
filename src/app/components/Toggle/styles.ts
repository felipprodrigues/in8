import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  & div {
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["gray-100"]};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.15s linear;
  }

  & div:hover {
    background-color: ${(props) => props.theme["gray-400"]};
    transform: scale(1.1);
  }
`;
