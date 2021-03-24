import '../styles/home.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRestaurantsAction } from '../actions/index';
import getRestaurantsList from '../request.js/getRestaurantsList';
import Preview from '../components/Preview';

const Home = ({ RestaurantList, fetch }) => {
  useEffect(() => {
    getRestaurantsList().then(res => {
      fetch(res);
    });
  }, []);

  return (
    <div className="w-100">
      <h1 className="text-center mt-5"> HOME </h1>
      <div className="home_content row">
        {RestaurantList.map(obj => (
          <div
            className="col-lg-3 col-md-4 col-sm-12 mt-3"
            key={obj.id}
          >
            <Preview
              restaurant={obj}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  RestaurantList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    cover: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  RestaurantList: state.restaurants,
});

const mapDispatchToProps = dispatch => ({
  fetch: restaurants => {
    dispatch(fetchRestaurantsAction(restaurants));
  },
});

Home.propTypes = {
  fetch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
