import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import ContentSend from 'material-ui/svg-icons/content/send';


export default class ChatList extends React.Component {
    render() {
        return (
            <List>
                <a href='#'>
                    <ListItem primaryText='Chat 1' leftIcon={<ContentSend />} />
                </a>
                <a href='#'>
                    <ListItem primaryText='Chat 2' leftIcon={<ContentSend />} />
                </a>
                <a href='#'>
                    <ListItem primaryText='Chat 3' leftIcon={<ContentSend />} />
                </a>
            </List>
        )
    }
}
