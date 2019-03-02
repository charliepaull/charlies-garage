import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const Nav = () => (
  <Menu compact>
    <Menu.Item active>Link</Menu.Item>
    <Menu.Item active>Link</Menu.Item>
    <Menu.Item active>Link</Menu.Item>
    <Menu.Item active>Link</Menu.Item>

    <Menu.Item>
      <Button primary>Sign up</Button>
    </Menu.Item>

    <Menu.Item>
      <Button>Log-in</Button>
    </Menu.Item>
  </Menu>
)

export default Nav