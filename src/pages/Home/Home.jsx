import { Container, ContainerTitle } from './Home.styled.js';

export default function Home() {
  return (
    <Container>
      <ContainerTitle>
        Phonebook
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </ContainerTitle>
    </Container>
  );
}
