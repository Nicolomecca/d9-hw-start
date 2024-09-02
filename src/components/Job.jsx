import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const addToFavourites = () => {
    dispatch({
      type: 'ADD_TO_FAVOURITES',
      payload: data.company_name
    });
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9} className="d-flex align-items-center justify-content-between">
        <div>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </div>
        <Button
          variant="light"
          className="ms-4"
          onClick={addToFavourites}
        >
          ➕
        </Button>
      </Col>
    </Row>
  );
};

export default Job;