import React from 'react';
import styled from 'styled-components';
import { FlexContainer, Button } from '@/components/atoms';
import { Search } from '@/components/molecules';
import { SearchWithButtonProps } from './types';

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textPrimary};

  @media (max-width: 468px) {
    margin: 10px 0;
  }
`;

const SearchWithButton: React.FC<SearchWithButtonProps> = ({
  onChangeValue,
  searchValue,
  onSubmit,
  onClear,
  placeholder,
  width,
  height
}) => {
  return (
    <FlexContainer
      width={width}
      height={height}
      resDirection='column'
      resWidth='80%'
      alignItems='center'
      padding='10px 20px'
    >
      <Search
        searchValue={searchValue}
        placeholder={placeholder}
        onChangeValue={(value: string) => onChangeValue(value)}
        onSubmit={() => onSubmit()}
        width='100%'
        height='50px'
      />
      <StyledButton
        height='60px'
        width='200px'
        margin='0 0 0 20px'
        padding='15px'
        onClick={() => onClear()}
        data-cy='clear-input-search-button'
      >
        Clear
      </StyledButton>
    </FlexContainer>
  );
};

export default SearchWithButton;