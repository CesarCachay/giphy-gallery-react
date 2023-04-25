import React from 'react';
import { FlexContainer } from '@/components/atoms';
import { StyledGifCard, StyledGifImage, StyledText, StyledButton } from './GifCard';
import { GifCardType } from './types';

const GiftCard: React.FC<GifCardType> = ({
  id,
  title,
  picture,
  url,
  isFavorite,
  handleAddToFavorites
}) => {

  const handleOpenTab = (url: string) => {
    // This will open a new tab and focus on that tab
    window.open(url, '_blank')?.focus();
  };


  return (
    <StyledGifCard shadowLow width='300px'>
      <StyledGifImage src={picture} alt={title} onClick={() => handleOpenTab(url)} />
      <FlexContainer justify='center' alignItems='center' direction='column'>
        {isFavorite ? (
          <FlexContainer padding='10px' bgColor='green'>
            Is Favorite
          </FlexContainer>
        ) : (
          <StyledButton
            padding='10px'
            width='150px'
            margin='10px 0 0 0'
            onClick={() => handleAddToFavorites({
              id,
              title,
              picture,
              url
            })}
          >
            Add To Favorites
          </StyledButton>
        )}
        <StyledText>{title}</StyledText>
      </FlexContainer>
    </StyledGifCard >
  );
};

export default GiftCard;