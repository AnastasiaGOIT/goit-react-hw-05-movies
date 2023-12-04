import { Container } from 'components/Layout.styled';
import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Container>
      <Circles
        height="80"
        width="80"
        color="DarkGrey"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  );
};
