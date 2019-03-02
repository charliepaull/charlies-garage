import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Nav = () => (
  <Menu compact>
    <Menu.Item as={Link} to='/'>Home</Menu.Item>
    <Menu.Item active>About</Menu.Item>
    <Menu.Item active>Contact</Menu.Item>


    <Menu.Item position='right'>
      <Button primary as={Link} to='signup' style={{ marginLeft: '0.5em' }} >Sign up</Button>
    </Menu.Item>

    <Menu.Item>
      <Button as={Link} to='loginForm'>Log-in</Button>
    </Menu.Item>
</Menu>
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