import React from 'react'
import { Menu, Button, Segment, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Nav = () => (
  
  <Segment inverted>
    <Menu fixed='top' inverted>
      <Menu.Item as={Link} to='/'> <Icon name='home' />Home</Menu.Item>
      <Menu.Item active> <Icon name='user' />About</Menu.Item>
      <Menu.Item active> <Icon name='info' />Contact</Menu.Item>


      <Menu.Item position='right'>
        <Button primary as={Link} to='signup' style={{ marginLeft: '0.5em' }} >Sign up</Button>
      </Menu.Item>

      <Menu.Item>
        <Button as={Link} to='loginForm'>Log-in</Button>
      </Menu.Item>
    </Menu>
  </Segment>



)

export default Nav

/* <Container>
                <Menu.Item as='a' active>
                  Home
                  </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as={Link} to='loginForm' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as={Link} to='signup' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container> */