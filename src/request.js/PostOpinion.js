import baseUrl from './requesturl';

const PostOpinion = async data => {
  const url = `${baseUrl}/opinions`;
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify(data),
  });

  return response.json();
};

export default PostOpinion;