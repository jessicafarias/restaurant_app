import { useParams } from 'react-router-dom';
//import 'semantic-ui-css/semantic.min.css';
import FormOpinion from '../components/FormOpinion';
const Show = () => {
  const { restaurant } = useParams();

  return (
    <div>
      <p>Carousel
      </p>
      <p> {restaurant} </p>
      <h2 className="text-center">Comments</h2>
      <FormOpinion />
    </div>
  )
}

export default Show;