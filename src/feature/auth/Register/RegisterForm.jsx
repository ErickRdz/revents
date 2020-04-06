import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import textInput from '../../../app/common/form/textInput';

const RegisterForm = () => {
  return (
    <div>
      <Form size="large">
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={textInput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={textInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={textInput}
            placeholder="Password"
          />
          <Button fluid size="large" color="teal">
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

export default reduxForm({form: 'registerForm'})(RegisterForm);