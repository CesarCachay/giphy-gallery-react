import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexContainer } from "@/components/atoms";

export const NavbarContainer = styled(FlexContainer)`
  padding: 20px;
  opacity: 0.9;
  font-size: 28px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textPrimary};

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    font-size: 20px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.textTitle};

  &:hover {
    color: ${({ theme }) => theme.placeholderColor};
  }

  @media (max-width: 400px) {
    margin-bottom: 20px;
  }
`;
