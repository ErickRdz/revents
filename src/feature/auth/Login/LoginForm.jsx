import React from 'react';
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import textInput from '../../../app/common/form/textInput';
import {login, socialLogin} from '../authActions';
import { connect } from 'react-redux';
import SocialLogin from '../SocialLogin/SocialLogin';

const actions = {
  login,
  socialLogin
}

const LoginForm = ({login, handleSubmit, error, socialLogin, submitting}) => {
  return (
    <Form size="large" onSubmit={handleSubmit(login)} autoComplete='off'>
      <Segment>
        <Field
          name="email"
          component={textInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={textInput}
          type="password"
          placeholder="password"
        />
        {error && <Label basic color='red'>{error}</Label> }
        <Button loading={submitting} fluid size="large" color="teal">
          Login
        </Button>
        <Divider horizontal>
          Or
        </Divider>
        <SocialLogin socialLogin={socialLogin} />
      </Segment>
    </Form>
  );
};

export default connect(null, actions)(reduxForm({form: 'loginForm'})(LoginForm));