import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { FlexContainer, Typography } from '@/components/atoms';
import { Pagination } from '@/components/molecules';
import { fetchGifs, fetchTrendingGifs } from '@/services';
import { GifList, SearchWithButton } from '@/components/organisms';
import { getNumberOfPages, gifFormatter } from '@/helpers/functions';
import { ErrorStateType, GifType } from '@/helpers/types';

const Home: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState<number | undefined>();
  const [query, setQuery] = useState('');
  const [gifList, setGifList] = useState<Array<GifType>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorState, setErrorState] = useState<ErrorStateType>({
    hasError: false,
    message: null
  });


  useEffect(() => {
    // This is an initial fetch to have some GIFs if there is not a query from the user
    if (query.length > 0) return;
    setIsLoading(true);
    fetchTrendingGifs(page)
      .then(res => {
        const { data, pagination } = res || {};
        const numbers = getNumberOfPages(pagination.total_count);
        const formattedList = gifFormatter(data);
        setNumberOfPages(numbers)
        setGifList(formattedList);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorState({ hasError: true, message: err.message });
      })
  }, [page]);

  useEffect(() => {
    // This is a fetching using what the user wants to search in the Giphy API
    if (query.length > 2) {
      setIsLoading(true);
      fetchGifs(query, page)
        .then(res => {
          if (res) {
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
    }
  }, [page, query]);

  const handleClear = () => {
    setQuery('');
    setGifList([]);
    setPage(1);
    setNumberOfPages(1);
    setErrorState({
      hasError: false,
      message: null
    })
    enqueueSnackbar('Search input & results cleared!', {
      variant: 'success'
    })
  };

  return (
    <FlexContainer
      container
      alignItems='center'
      direction='column'
      bgColor='#fff'
    >
      <FlexContainer margin='20px' width='100%' justify='center'>
        <SearchWithButton
          searchValue={query}
          onChangeValue={(e) => setQuery(e)}
          onClear={() => handleClear()}
          placeholder='Type something to search'
          onSubmit={() => console.log('query', query)}
          width='100%'
          height='80px'
        />
      </FlexContainer>
      {errorState.hasError && <Typography>{errorState.message}</Typography>}
      {isLoading ? (
        <FlexContainer width='100%' padding='40px' justify='center'>
          <Typography>Loading ...</Typography>
        </FlexContainer>
      ) : (
        <GifList giftList={gifList} />
      )}
      {numberOfPages && numberOfPages > 1 && (
        <Pagination
          page={page}
          numberOfPages={numberOfPages}
          setPage={setPage}
          isLoading={isLoading}
        />
      )}
    </FlexContainer>
  );
};

export default Home;