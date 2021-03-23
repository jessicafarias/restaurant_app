import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import '../styles/restaurantimages.css';


const RestaurantImages = ({ items }) => (
  <div id="carousel_container">
    <Carousel itemsToShow={4}>
      {items.map(item => (
        <div key={item.id} 
        className="w-100 sizeprogress">
          <div className="d-flex justify-content-center align-items-center w-100">
            <img className="img_carousel" src={item.img}></img>
          </div>
          <p className="text-center font-xs">{item.name}</p>
        </div>
      ))}
    </Carousel>
  </div>
);

RestaurantImages.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};

export default RestaurantImages;