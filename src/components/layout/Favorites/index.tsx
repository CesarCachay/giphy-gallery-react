import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FlexContainer, Typography } from '@/components/atoms';
import { FavoriteCard } from '@/components/molecules';
import { GifType } from '@/helpers/types';

const FavoriteListContainer = styled(FlexContainer)`
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

const Favorites = () => {
  const [favoritesArray, setFavoritesArray] = useState([]);

  useEffect(() => {
    const array = localStorage.getItem('items')
    if (array) {
      const favoritesList = JSON.parse(array);
      setFavoritesArray(favoritesList);
    }
  }, [])

  return (
    <React.Fragment>
      {favoritesArray.length > 0 ? (
        <FavoriteListContainer>
          {favoritesArray.map((favoriteGif: GifType) => (
            <React.Fragment key={favoriteGif.id}>
              <FavoriteCard
                title={favoriteGif.title}
                id={favoriteGif.id}
                picture={favoriteGif.picture}
                url={favoriteGif.url}
              />
            </React.Fragment>
          ))}
        </FavoriteListContainer>
      ) : (
        <FlexContainer width='100%' padding='40px' justify='center' resPadding='0'>
          <Typography color='gray'>There are no favorites GIFs yet.</Typography>
        </FlexContainer>
      )}
    </React.Fragment >
  );
};

export default Favorites;