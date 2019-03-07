import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, Label, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";




const LoginForm = () => (
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>Sign up! Find a mechanic today!</Header>
        <Form size='large'>
         
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Full name' />
            <Form.Input fluid icon='at' iconPosition='left' placeholder='E-mail' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='blue' fluid size='large'>
              Sign Up
            </Button>
        
        </Form>
        <Message>
          Already a member?
          <Label as={Link} to='loginForm'> <Icon name='pen square' />Log In</Label>
          
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm

{/* <div>
    <Message
      attached
      header='Welcome to our site!'
      content='Fill out the form below to sign-up for a new account'
    />
    <Form className='attached fluid segment'>
      <Form.Group widths='equal'>
        <Form.Input fluid label='First Name' placeholder='First Name' type='text' />
        <Form.Input fluid label='Last Name' placeholder='Last Name' type='text' />
      </Form.Group>
      <Form.Input label='Username' placeholder='Username' type='text' />
      <Form.Input label='Password' type='password' />
      <Form.Checkbox inline label='I agree to the terms and conditions' />
      <Button color='blue'>Submit</Button>
    </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Already signed up?&nbsp;<a href='#'>Login here</a>&nbsp;instead.
    </Message>
  </div> */}
