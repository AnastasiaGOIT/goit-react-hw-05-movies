import { Button, Input, Form } from './SearchForm.styled';

export const SearchForm = ({ handleSubmit, query, updateQueryString }) => {
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
    </>
  );
};
