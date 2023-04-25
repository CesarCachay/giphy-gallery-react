import React from 'react';
import { FlexContainer } from '@/components/atoms';
import { StyledGifCard, StyledGifImage } from './GifCard';
import { GifCardType } from './types';

const GiftCard: React.FC<GifCardType> = ({ title, picture }) => {
  return (
    <StyledGifCard shadowLow width='300px'>
      <StyledGifImage src={picture} alt={title} />
      <FlexContainer width='85%' justify='center'>
      </FlexContainer>
    </StyledGifCard>
  );
};

export default GiftCard;