import { useDispatch, useSelector } from 'react-redux';
import { Container, ListGroup} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons'
import { removeFromFavouriteAction } from '../redux/actions'


const FavouritesPage = () => {
  const favourites = useSelector(state => state.favourites.list);
  const navigate = useNavigate(); 
  const dispatch = useDispatch()

  const goToHome = () => {
    navigate('/'); 
  };

  return (
    <Container>
      <h1 className="mt-4">Elenco Aziende Preferite</h1>
      <ListGroup>
        {favourites.map((fav, index) => (
          <ListGroup.Item key={index}>
             <StarFill
                  className="mr-2"
                  onClick={() => dispatch(removeFromFavouriteAction(fav))}
                />
            <Link to={`/${fav}`}>{fav}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default FavouritesPage;