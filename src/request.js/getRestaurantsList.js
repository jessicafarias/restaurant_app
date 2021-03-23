import baseUrl from './requesturl';

const getRestaurantsList = async (name = '') => {
  const url = `${baseUrl}/restaurants/${name}`;

  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
  });
  return response.json();
};

export default getRestaurantsList;