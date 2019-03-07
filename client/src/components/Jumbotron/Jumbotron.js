import React from 'react'
import { Grid, Header, Message, Button } from 'semantic-ui-react'

const Jumbotron = () => (
  <Grid container style={{ padding: '5em 0em' }}>
    <Grid.Row>
      <Grid.Column>
        <Header as='h1' dividing>
          Bootstrap Migration
        </Header>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Message>
          <Header as='h1'>Hello, world!</Header>
          <p>
            This is a template for a simple marketing or informational website. It includes a large
            callout called a jumbotron and three supporting pieces of content. Use it as a starting
            point to create something more unique.
          </p>
          <Button color='blue'>Learn more &raquo;</Button>
        </Message>
      </Grid.Column>
    </Grid.Row>
    </Grid>
)

export default Jumbotron


