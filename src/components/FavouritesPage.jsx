import { useSelector } from 'react-redux';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const FavouritesPage = () => {
  const favourites = useSelector(state => state.favourites.company);
  const navigate = useNavigate(); 

  const goToHome = () => {
    navigate('/'); 
  };

  return (
    <Container>
      <h1 className="mt-4">Elenco Aziende Preferite</h1>
      {favourites.length > 0 ? (
        <ListGroup>
          {favourites.map((company, index) => (
            <ListGroup.Item key={index}>
              <Link to={`/${company}`}>{company}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>Non hai ancora aggiunto nessuna azienda ai preferiti.</p>
      )}
      <Button 
        variant="primary" 
        className="mt-3" 
        onClick={goToHome} 
      >
        Torna alla Home
      </Button>
    </Container>
  );
};

export default FavouritesPage;