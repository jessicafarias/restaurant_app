import { useParams } from 'react-router-dom';

const Show = () => {
  const { restaurant } = useParams();

  return (
    <div>
      IM GONNA SHOW AN SPECIFIC RESTAURANT
      <p> {restaurant} </p>
    </div>
  )
}

export default Show;