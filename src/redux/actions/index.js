export const AGGIUNGIFAVORITI = "ADD_TO_FAVOURITES";
export const GET_COMPANY ='GET_COMPANY'
export const addFavourites = (data) => {
  return {
    type: AGGIUNGIFAVORITI,
    payload: data.company_name,
  };
};

export const fetchArrayData = (query) => {
    return (dispatch) => {
      const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  
      fetch(baseEndpoint + query + "&limit=20")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error fetching results');
          }
        })
        .then(({ data }) => {
          dispatch({
            type: GET_COMPANY,
            payload: data, 
          });
        })
        .catch((error) => {
          console.error(error);
          alert("Error fetching results");
        });
    };
  };
