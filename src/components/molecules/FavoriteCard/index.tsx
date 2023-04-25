import React from 'react';
import { StyledGifCard, StyledGifImage, StyledText, StyledButton } from './FavoriteCard';
import { FavoriteCardType } from './types';
import { FlexContainer } from '@/components/atoms';

const GiftCard: React.FC<FavoriteCardType> = ({
  id,
  title,
  picture,
  url,
  removeFromFavorites
}) => {

  const handleOpenTab = (url: string) => {
    window.open(url, '_blank')?.focus();
  };

  return (
    <StyledGifCard shadowLow width='300px'>
      <StyledGifImage src={picture} alt={title} onClick={() => handleOpenTab(url)} />
      <FlexContainer justify='center' alignItems='center' direction='column'>
        <StyledButton
          padding='10px'
          width='180px'
          margin='10px 0 0 0'
          onClick={() => removeFromFavorites(id)}
        >
          Remove from Favorites
        </StyledButton>
        <StyledText>{title}</StyledText>
      </FlexContainer>
    </StyledGifCard>
  );
};

export default GiftCard;