import React, { useState } from 'react';
import './NavBar.css';
import { Icon, Button, Sidebar, Menu, Segment, Header, Image, Grid } from 'semantic-ui-react';
import { Link, Link as RouterLink } from 'react-router-dom'

const style = <link rel="stylesheet" href= 'https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css' />

const NavBar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
        <Button.Group>
            <Button disabled={visible} onClick={() => setVisible(true)}>
                Show Sidebar
            </Button>
            <Button disabled={!visible} onClick={() => setVisible(true)}>
                Hide Sidebar
            </Button>
        </Button.Group>
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={() => setVisible(false)}
                    vertical
                    visible={visible}
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
        </div>
    )
}

export default () => (
    <div className="dimScreen">{style}<NavBar /></div>
);