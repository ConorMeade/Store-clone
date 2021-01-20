import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { Icon, Button, Sidebar, Menu, Segment, Header, Image, Grid } from 'semantic-ui-react';
import { Link, Link as RouterLink } from 'react-router-dom'


const NavBar = () => {
    // const [visible, setVisible] = useState<boolean>(false);
    
    return (
        <Grid columns={1}>
        {/* <Grid.Column>
          <Checkbox
            checked={visible}
            label={{ children: <code>visible</code> }}
            onChange={() => setVisible(!visible)}
          />
        </Grid.Column> */}
        <Grid.Column>
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    // onHide={() => setVisible(false)}
                    vertical
                    visible
                    width="thin"
                >
                    <Menu.Item>
                        <Icon name='home' />
                        Shirts
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name='gamepad' />
                        Shoes
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name='camera' />
                        Pants
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name='pied piper hat' />
                        Hats
                    </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher>
                    <Segment basic>
                    <Header as='h3'>Application Content</Header>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Grid.Column>
    </Grid>
    )
}

export default NavBar;