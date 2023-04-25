import React from 'react';
import { StyledGifCard, StyledGifImage, StyledText } from './FavoriteCard';
import { FavoriteCardType } from './types';

const GiftCard: React.FC<FavoriteCardType> = ({ title, picture, url }) => {

  const handleOpenTab = (url: string) => {
    window.open(url, '_blank')?.focus();
  };

  return (
    <StyledGifCard shadowLow width='300px'>
      <StyledGifImage src={picture} alt={title} onClick={() => handleOpenTab(url)} />
      <StyledText>
        {title}
      </StyledText>
    </StyledGifCard>
  );
};

export default GiftCard;