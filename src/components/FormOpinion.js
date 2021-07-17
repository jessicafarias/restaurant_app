import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  TextArea,
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import PostOpinion from '../request.js/PostOpinion';
import { postOpinionsAction } from '../actions';

const FormOpinion = ({ restaurantId, post, handleClick }) => {
  const [data, setData] = useState({
    name: '',
    body: '',
    restaurant_id: restaurantId,
  });

  const handleSubmit = event => {
    event.preventDefault();
    PostOpinion(data).then(res => {
      post(res);
    });
    setData({
      name: '',
      body: '',
      restaurant_id: data.restaurant_id,
    });
    handleClick();
  };

  const handleState = event => {
    event.preventDefault();
    if (event.target.id === 'name') {
      setData({
        name: event.target.value,
        body: data.body,
        restaurant_id: data.restaurant_id,
      });
    } else if (event.target.id === 'body') {
      setData({
        name: data.name,
        body: event.target.value,
        restaurant_id: data.restaurant_id,
      });
    }
  };

  return (
    <Form className="w-50 m-auto">
      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          label="Name"
          placeholder="Name"
          id="name"
          name="name"
          onChange={handleState}
          value={data.name}
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label="About"
        id="body"
        name="body"
        placeholder="Tell us more about this restaurant..."
        onChange={handleState}
        value={data.body}
      />
      <Form.Field control={Button} onClick={handleSubmit} type="button">Submit</Form.Field>
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  post: opinion => {
    dispatch(postOpinionsAction(opinion));
  },
});

FormOpinion.propTypes = {
  restaurantId: PropTypes.number.isRequired,
  post: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormOpinion);
