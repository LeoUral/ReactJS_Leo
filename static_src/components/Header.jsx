import React from 'react';
import Profile from './Profile.jsx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Header extends React.Component {

    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <div className='header'>
                <span style={{ fontSize: '20px' }}>Чат {this.props.chatId} </span>
                <Link to='/profile/'>
                    <div style={{ padding: '10px', fontSize: '20px', textAlign: 'center' }} >Профиль</div>
                </Link>
            </div>
        )
    }
}