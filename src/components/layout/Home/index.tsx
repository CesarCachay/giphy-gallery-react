import React, { useEffect, useState } from 'react';
import { FlexContainer, Typography } from '@/components/atoms';
import { Pagination } from '@/components/molecules';
import { fetchGifs } from '@/services';
import { GifList } from '@/components/organisms';
import { getNumberOfPages, gifFormatter } from '@/helpers/functions';
import { ErrorStateType } from '@/helpers/types';

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState<number | undefined>();
  // const [inputValue, setInputValue] = useState('');
  const [gifList, setGifList] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorState, setErrorState] = useState<ErrorStateType>({
    hasError: false,
    message: null
  });

  useEffect(() => {
    setIsLoading(true);
    fetchGifs('cheeseburgers', page)
      .then(res => {
        if (res) {
          console.log('res', res)
          const { data, pagination } = res || {};
          const numbers = getNumberOfPages(pagination.total_count);
          const formattedList = gifFormatter(data);
          setNumberOfPages(numbers)
          setGifList(formattedList);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setErrorState({ hasError: true, message: err.message });
      })
  }, [page]);

  return (
    <FlexContainer
      container
      alignItems='center'
      direction='column'
      bgColor='#fff'
    >
      <FlexContainer margin='20px' width='100%' justify='center'>
        <button>search</button>
      </FlexContainer>
      {errorState.hasError && <Typography>{errorState.message}</Typography>}
      {isLoading ? (
        <Typography>Loading ...</Typography>
      ) : (
        <GifList giftList={gifList} />
      )}
      <Pagination page={page} numberOfPages={numberOfPages} setPage={setPage} />
    </FlexContainer>
  );
};

export default Home;