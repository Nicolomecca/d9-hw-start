// FavouritesPage.jsx
import { useSelector } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FavouritesPage = () => {
  const favourites = useSelector(state => state.main.favourites);

  return (
    <Container>
      <h1 className="mt-4">Elenco Aziende Preferite</h1>
      <ListGroup>
        {favourites.map((company, index) => (
          <ListGroup.Item key={index}>
            <Link to={`/${company}`}>{company}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default FavouritesPage;