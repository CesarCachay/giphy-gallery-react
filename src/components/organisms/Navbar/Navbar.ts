import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexContainer } from "@/components/atoms";

export const NavbarContainer = styled(FlexContainer)`
  padding: 20px;
  opacity: 0.9;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textPrimary};

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 20px;
  }
`;

export const StyledTitle = styled(FlexContainer)`
  color: ${({ theme }) => theme.textTitle};
  font-size: 28px;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.textTitle};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.placeholderColor};
  }

  @media (max-width: 400px) {
    margin: 20px 0;
  }
`;
