import React from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';
import IconButton from 'material-ui/IconButton/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { addChat, deleteChat } from '../actions/chatActions.js';

class ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        deleteChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    nandleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleAddChat();
        }
    };

    handleAddChat = () => {
        if (this.state.input.length > 0) {
            this.props.addChat(this.state.input);
            this.setState({ input: '' });
        }
    };

    handleDeleteChat = (chatId) => {
        this.props.deleteChat(chatId);

    };

    render() {
        const { chats } = this.props;
        const chatElements = Object.keys(chats).map(chatId => (

            <ListItem
                primaryText={chats[chatId].title}
                leftIcon={<ContentSend />}
                onClick={() => this.props.push(`/chat/${chatId}`)}>
                <IconButton aria-label="delete" onClick={this.handleDeleteChat}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </ListItem>

        ));

        return (
            <List>
                {chatElements}
                <ListItem
                    key='Add new chat'
                    leftIcon={<AddIcon />}
                    onClick={this.handleAddChat}
                    style={{ height: '60px' }}
                    children={<TextField
                        key='textField'
                        fullWidth
                        name='input'
                        hintText='Добавить новый чат'
                        onChange={this.handleChange}
                        value={this.state.input}
                        onKeyUp={this.handleKeyUp}
                    />}
                />
            </List>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, deleteChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
