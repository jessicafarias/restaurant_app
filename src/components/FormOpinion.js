import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  TextArea,
} from 'semantic-ui-react';

const FormOpinion = () => {
  
  return (
    <Form className="w-50 m-auto">
      <Form.Group widths='equal'>
        <Form.Field
          control={Input}
          label='Name'
          placeholder='Name'
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label='About'
        placeholder='Tell us more about this restaurant...'
      />
      <Form.Field
        control={Checkbox}
        label='I agree to the Terms and Conditions'
      />
      <Form.Field control={Button}>Submit</Form.Field>
    </Form>
  )
  
}

export default FormOpinion;