import React from 'react';
import styled from 'styled-components';
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
              />
            </React.Fragment>
          ))}
        </GifListContainer>
      ) : (
        <FlexContainer width='100%' padding='40px' justify='center'>
          <Typography>There are no results for that query.</Typography>
        </FlexContainer>
      )}

    </React.Fragment>
  );
};

export default GifList;