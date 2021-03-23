import smoothie from '../assets/smoothie.jpg';
import '../styles/preview.css';
import PropTypes from 'prop-types';

const Preview = ({restaurant}) => {
  return (
    <div>
      <img src={restaurant.cover} className="w-100 preview_img">
      </img>
      <p>{restaurant.title}</p>
      <p>{restaurant.description}      </p>
      <button className="btn_view"> VIEW MORE
      </button>
    </div>
  )
}

Preview.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    cover: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Preview;