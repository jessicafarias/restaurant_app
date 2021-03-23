import { useParams } from 'react-router-dom';
//import 'semantic-ui-css/semantic.min.css';
import UserOpinion from '../components/UserOpinion'
import FormOpinion from '../components/FormOpinion';
import RestaurantImages from '../components/RestaurantImages';
const Show = () => {
  const { restaurant } = useParams();

  const ImagesList =[{id:1, 
    name:'das',
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  {id:2, 
    name:'das',
  img:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},{id:3, name:'das',
img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},{id:4, name:'das', img:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},{id:5, name:'das',
img:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},{id:6, name:'das', img:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}]
  return (
    <div>
      <h2 className="text-center">Pictures</h2>
      <RestaurantImages items={ImagesList}/>
      <h2 className="text-center">Opinions</h2>
      <UserOpinion />
      <h2 className="text-center">New opinion</h2>
      <FormOpinion />
    </div>
  )
}

export default Show;