import { GridLoader } from 'react-spinners';

import { Wrapper } from './Loader.styled';

export default function Loader() {
  return (
    <Wrapper>
      <GridLoader color="#6317a1" size="50px" />
    </Wrapper>
  );
}
