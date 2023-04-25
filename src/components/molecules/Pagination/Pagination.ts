import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  margin-top: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  margin-bottom: 8px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center
  width: 100px;
  height: 35px;
  border-radius: 5px;
  background-color: rgba(54, 54, 54, 1);
  color: rgba(248, 248, 248, 1);

  &:active, &:hover {
    background-color: rgba(54, 54, 54, 0.9);
  }

  &[disabled] {
    opacity: 0.5;
    background-color: rgba(54, 54, 54, 1);
    cursor: initial;
  }
`;
