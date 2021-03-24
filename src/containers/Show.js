import { useParams } from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import UserOpinion from '../components/UserOpinion';
import FormOpinion from '../components/FormOpinion';
import RestaurantImages from '../components/RestaurantImages';
import getRestaurant from '../request.js/getRestaurant';
import { showRestaurantAction } from '../actions';

const Show = ({ RestaurantView, get }) => {
  const { restaurant } = useParams();
  const [count, setCount] = useState(0);
  console.log(restaurant);

  const handleOpinions = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    getRestaurant(restaurant).then(res => {
      get(res);
      setCount(res.opinions.length);
    });
  }, [count]);

  return (
    <div>
      <h1 className="text-center">{RestaurantView.restaurant.name}</h1>
      <h2 className="text-center">{RestaurantView.restaurant.description}</h2>
      <h2 className="text-center">Pictures</h2>
      <RestaurantImages items={RestaurantView.images} />
      <h2 className="text-center">Opinions</h2>
      <UserOpinion opinions={RestaurantView.opinions} />
      <h2 className="text-center">New opinion</h2>
      <FormOpinion restaurantId={RestaurantView.restaurant.id} handleClick={handleOpinions} />
    </div>
  );
};

const mapStateToProps = state => ({
  RestaurantView: state.restaurant,
});

const mapDispatchToProps = dispatch => ({
  get: restaurant => {
    dispatch(showRestaurantAction(restaurant));
  },
});

Show.propTypes = {
  RestaurantView: (
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      cover: PropTypes.string,
      description: PropTypes.string,
    }),
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      body: PropTypes.string,
      created_at: PropTypes.string,
    })),
    PropTypes.arrayOf({
      image: PropTypes.string,
    })).isRequired,
  get: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
