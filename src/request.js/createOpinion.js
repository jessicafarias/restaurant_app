import baseUrl from './requesturl';

const getOpinion = async (data) => {
  const url = `${baseUrl}/opinions`;

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export default getOpinion;