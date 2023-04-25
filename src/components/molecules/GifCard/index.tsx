import React, { useState, useEffect } from 'react';
import { FlexContainer, Button } from '@/components/atoms';
import { StyledGifCard, StyledGifImage } from './GifCard';
import { GifCardType } from './types';

const GiftCard: React.FC<GifCardType> = ({ id, title, picture, url }) => {
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(favoritesList));
  }, []);

  const handleOpenTab = (url: string) => {
    window.open(url, '_blank')?.focus();
  };

  const handleAddToFavorites = () => {
    const currentFavoritesGif = localStorage.getItem("items");
    let newArr = []
    if (currentFavoritesGif) {
      newArr = JSON.parse(currentFavoritesGif);
    }
    const newFavoriteGifData = {
      id,
      title,
      picture,
      url
    }
    newArr.push(newFavoriteGifData);
    localStorage.setItem('items', JSON.stringify(newArr));
    setFavoritesList(newArr);
  };

  return (
    <StyledGifCard shadowLow width='300px'>
      <StyledGifImage src={picture} alt={title} onClick={() => handleOpenTab(url)} />
      <FlexContainer justify='center'>
        <Button
          padding='10px'
          width='150px'
          bgColor='black'
          onClick={() => handleAddToFavorites()}
        >
          Add To Favorites
        </Button>
      </FlexContainer>
    </StyledGifCard>
  );
};

export default GiftCard;