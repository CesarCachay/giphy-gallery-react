import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSnackbar } from 'notistack';
import { FlexContainer, Typography } from '@/components/atoms';
import { GifCard } from '@/components/molecules'
import { GifListProps } from './types';
import { GifType } from '@/helpers/types';

const GifListContainer = styled(FlexContainer)`
  padding-top: 20px;
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
  }
`;

const GifList: React.FC<GifListProps> = ({ giftList }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem('items');
    // validate if there is already favorites in localstorage
    if (items) {
      const parsedArray = JSON.parse(items);
      setFavoritesList(parsedArray);
      // otherwise will set the value on localstorage
    } else {
      localStorage.setItem('items', JSON.stringify(favoritesList));
    }
  }, []);

  const handleAddToFavorites = (data: GifType) => {
    const currentFavoritesGif = localStorage.getItem('items');
    let newArr = []
    if (currentFavoritesGif) {
      newArr = JSON.parse(currentFavoritesGif);
      newArr.push(data);
      localStorage.setItem('items', JSON.stringify(newArr));
      setFavoritesList(newArr);
      // Will trigger the notification to let the user know that the selected gif is saved as favorite
      enqueueSnackbar('GIF added as favorite!', {
        variant: 'success'
      })
    }
  };

  return (
    <React.Fragment>
      {giftList.length > 0 ? (
        <GifListContainer>
          {giftList.map((gif: GifType) => (
            <React.Fragment key={gif.id}>
              <GifCard
                title={gif.title}
                id={gif.id}
                picture={gif.picture}
                url={gif.url}
                isFavorite={favoritesList.some((favGif: GifType) => favGif.id === gif.id)}
                handleAddToFavorites={handleAddToFavorites}
              />
            </React.Fragment>
          ))}
        </GifListContainer>
      ) : (
        <FlexContainer width='100%' padding='40px' justify='center'>
          <Typography data-cy='empty-list-text'>There are no results for that query.</Typography>
        </FlexContainer>
      )}
    </React.Fragment>
  );
};

export default GifList;