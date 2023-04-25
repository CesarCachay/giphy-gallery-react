import styled from "styled-components";
import { Card } from "@/components/atoms";

export const StyledGifCard = styled(Card)`
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 4px;
  padding: 10px;
  height: 130px;
  width: 300px;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transition: 0.5s;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 400px) {
    width: 250px;
  }
`;

export const StyledGifImage = styled.img`
  width: 100px;
  height: 100px;
`;