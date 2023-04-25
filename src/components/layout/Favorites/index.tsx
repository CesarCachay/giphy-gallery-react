import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import styled from 'styled-components';
import { Button, FlexContainer, Typography } from '@/components/atoms';
import { FavoriteCard } from '@/components/molecules';
import { GifType } from '@/helpers/types';

const FavoriteListContainer = styled(FlexContainer)`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledButton = styled(Button)`
  height: 40px;
  width: 240px;
  margin: 0 0 0 20px;
  padding: 15px;
  background-color: ${({ theme }) => theme.bgColor};
`;

const StyledText = styled.h3`
  color: ${({ theme }) => theme.textPrimary};
`;

const Favorites = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [favoritesArray, setFavoritesArray] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem('items');
    if (items) {
      const favoritesList = JSON.parse(items);
      setFavoritesArray(favoritesList);
    }
  }, [])

  const handleClearFavorites = () => {
    localStorage.removeItem('items');
    setFavoritesArray([]);
    enqueueSnackbar('Favorite list is empty now!', {
      variant: 'success'
    });
  };

  const removeFromFavorites = (id: string) => {
    const filteredArr = favoritesArray.filter(item => item.id !== id);
    localStorage.setItem('items', JSON.stringify(filteredArr));
    setFavoritesArray(filteredArr);
    enqueueSnackbar('GIF added removed from favorite!', {
      variant: 'success'
    });
  };

  return (
    <React.Fragment>
      {favoritesArray.length > 0 ? (
        <FlexContainer container direction='column'>
          <FlexContainer width='100%' justify='center' bgColor='#ffff' padding='40px'>
            <StyledButton onClick={() => handleClearFavorites()}>
              <StyledText>Clear All Favorites</StyledText>
            </StyledButton>
          </FlexContainer>
          <FavoriteListContainer>
            {favoritesArray.map((favoriteGif: GifType) => (
              <React.Fragment key={favoriteGif.id}>
                <FavoriteCard
                  title={favoriteGif.title}
                  id={favoriteGif.id}
                  picture={favoriteGif.picture}
                  url={favoriteGif.url}
                  removeFromFavorites={removeFromFavorites}
                />
              </React.Fragment>
            ))}
          </FavoriteListContainer>
        </FlexContainer>
      ) : (
        <FlexContainer width='100%' padding='40px' justify='center' resPadding='0'>
          <Typography color='gray'>There are no favorites GIFs yet.</Typography>
        </FlexContainer>
      )}
    </React.Fragment >
  );
};

export default Favorites;