import React from 'react';
import styled from 'styled-components';
import SunIcon from '@/assets/SunIcon.js';
import MoonIcon from '@/assets/MoonIcon.js'
import { FlexContainer, Switch } from '@/components/atoms';
import { SwitchWithThemeProps } from './types';

const StyledContainer = styled(FlexContainer)`
  background-color: ${({ theme }) => theme.bgColor};
`;

const SwitchWithTheme: React.FC<SwitchWithThemeProps> = ({ toggleTheme, isDarkTheme }) => {
  return (
    <StyledContainer>
      <SunIcon />
      <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <MoonIcon />
    </StyledContainer>
  );
};

export default SwitchWithTheme;