import React from 'react';
import { Typography } from '@/components/atoms';
import { StyledFooter, ButtonsContainer, StyledButton } from './Pagination';
import { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({
  page,
  numberOfPages,
  setPage,
  isLoading
}) => {
  return (
    <StyledFooter>
      <ButtonsContainer>
        <div onClick={() => setPage(page - 1)}>
          <StyledButton disabled={isLoading || page === 1} data-cy="prev-button-option">
            Prev
          </StyledButton>
        </div>
        <div onClick={() => setPage(page + 1)}>
          <StyledButton disabled={isLoading || page === numberOfPages} data-cy="next-button-option">
            Next
          </StyledButton>
        </div>
      </ButtonsContainer>
      <Typography fontWeight={700} margin='10px 0 20px 0'>
        <span>{`Page ${page}`}</span>
        {numberOfPages && <span>{`/${numberOfPages}`}</span>}
      </Typography>
    </StyledFooter >
  );
};

export default Pagination;