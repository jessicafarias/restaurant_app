import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import '../styles/restaurantimages.css';

const RestaurantImages = ({ items }) => (
  <div>
    <div id="carousel_container" className="d-sm-block d-md-none">
      <Carousel itemsToShow={1}>
        {items.map(item => (
          <div
            key={item.id}
            className="w-100 sizeprogress"
          >
            <div className="d-flex justify-content-center align-items-center w-100">
              <img className="img_carousel" src={item.image} alt={item.id} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
    <div id="carousel_container" className="d-none d-md-block d-lg-none">
      <Carousel itemsToShow={3}>
        {items.map(item => (
          <div
            key={item.id}
            className="w-100 sizeprogress"
          >
            <div className="d-flex justify-content-center align-items-center w-100">
              <img className="img_carousel" src={item.image} alt={item.id} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
    <div id="carousel_container" className="d-none d-md-none d-lg-block">
      <Carousel itemsToShow={4}>
        {items.map(item => (
          <div
            key={item.id}
            className="w-100 sizeprogress"
          >
            <div className="d-flex justify-content-center align-items-center w-100">
              <img className="img_carousel" src={item.image} alt={item.id} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </div>

);

RestaurantImages.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
  })).isRequired,
};

export default RestaurantImages;
