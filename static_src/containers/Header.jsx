import React from 'react';
import Profile from './Profile.jsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/svg-icons/action/account-circle';
import { removeChat } from '../actions/removeAction.js';


export default class Header extends React.Component {

    static propTypes = {
        chatId: PropTypes.number,
        removeChat: PropTypes.func.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    handleRemoveChat = () => {
        this.props.removeChat(this.props.chatId);
    };

    render() {
        return (
            <div className='header'>
                <span style={{ fontSize: '20px' }}>Чат {this.props.chatId} </span>
                <button className='btn_remove_chat'
                    onClick={this.handleRemoveChat}>
                    Удалить чат</button>
                <Link to='/profile/'>
                    <div style={{ float: 'right', marginRight: '10px', color: 'white', display: 'flex', alignItems: 'center', }} >
                        <Avatar color='white' style={{ marginRight: '10px' }} />
                        <span>Леонид</span>

                    </div>
                </Link>
            </div >
        )
    }
}

