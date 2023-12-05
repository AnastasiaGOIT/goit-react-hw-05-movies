import { StyledLink } from './MovieList.styled';
import { Loader } from '../Loader/Loader';

export const MoviesList = ({ loading, value, location }) => {
  return (
    <>
      {loading && <Loader />}
      <ul>
        {value &&
          value.map(value => {
            return (
              <li key={value.id}>
                <StyledLink
                  to={`movies/${value.id}`}
                  state={{ from: location }}
                >
                  {value.title}
                </StyledLink>
              </li>
            );
          })}
      </ul>
    </>
  );
};
