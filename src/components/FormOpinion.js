import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  TextArea,
} from 'semantic-ui-react';
import { useState } from 'react';
import PostOpinion from '../request.js/PostOpinion';


const FormOpinion = ({restaurantId}) => {

  const [data, setData] = useState({
    name:'',
    body:'',
    restaurant_id: restaurantId,
  });

  const handleSubmit = event => {
    event.preventDefault();
    console.log(data);
    PostOpinion(data).then(res =>{
      console.log(res);
    })
  }

  const handleState = event => {
    event.preventDefault();
    if (event.target.id==="name"){
      setData({
        name:event.target.value,
        body:data.body,
        restaurant_id: data.restaurant_id,
      });
    } else if (event.target.id==="body") {
      setData({
        name:data.name,
        body:event.target.value,
        restaurant_id: data.restaurant_id,
      });;
    }
  }
  
  return (
    <Form className="w-50 m-auto">
      <Form.Group widths='equal'>
        <Form.Field
          control={Input}
          label='Name'
          placeholder='Name'
          id="name"
          name="name"
          onChange={handleState}
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label='About'
        id="body"
        name="body"
        placeholder='Tell us more about this restaurant...'
        onChange={handleState}
      />
      <Form.Field control={Button} onClick={handleSubmit}>Submit</Form.Field>
    </Form>
  )
  
}

export default FormOpinion;