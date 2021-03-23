import Preview from "../components/Preview";
import '../styles/home.css';
import PropTypes from 'prop-types';
import fetchRestaurantsAction from '../actions/index';
import { connect } from 'react-redux';

const Home = ({RestaurantList}) => {


  return (
    <div>
      <h1 className="text-center mt-5"> HOME </h1>
      <div className="home_content row">
        {RestaurantList.map(obj => (
            <div className="col-3">
              <Preview 
                key={obj.name}
                name={obj.name}
              />
          </div>
        ))}
      </div>
    </div>
  )
}

Home.propTypes = {
  RestaurantList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
