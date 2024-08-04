import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Map />
      Welcom Home!
      <Link to={`/setting`}>
        <Button>setting</Button>
      </Link>
    </Container>
  );
};

export default Home;

const Container = styled.div``;

const Map = styled.div`
  width: 600px;
  height: 90px;
  border: 5px solid blue;
`;

const Button = styled.button`
  display: block;
  border: 2px solid #eee;
  padding: 1rem 0.5rem;
  border-radius: 17px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
