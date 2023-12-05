import { StyledLink } from './MovieList.styled';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ value }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {value &&
          value.map(value => {
            return (
              <li key={value.id}>
                <StyledLink
                  to={`/movies/${value.id}`}
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
