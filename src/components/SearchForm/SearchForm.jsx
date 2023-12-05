import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Input, Form } from './SearchForm.styled';

export const SearchForm = ({ loading }) => {
  const [query, setQuery] = useState('');
  const [setSearchParams] = useSearchParams();
  const updateQueryString = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      return setSearchParams({});
    }
    setSearchParams({ value: query });
  };

  return (
    <>
      <Form role="search" onSubmit={handleSubmit}>
        <Input
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={updateQueryString}
        ></Input>
        <Button type="submit">Search</Button>
      </Form>
      {loading && <Loader />}
    </>
  );
};
