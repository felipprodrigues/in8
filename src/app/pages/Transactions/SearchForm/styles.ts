import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme["cyan-500"]};
    color: ${(props) => props.theme["cyan-500"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme["cyan-700"]};
      border: 1px solid ${(props) => props.theme["cyan-700"]};
      color: ${(props) => props.theme.white};
      transition: all 0.2s;
    }
  }
`;
