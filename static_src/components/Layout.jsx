import React from 'react';
import MessageField from './MessageField.jsx';
import Header from './Header.jsx';
import '../styles/style.css';
import PropTypes from 'prop-types';
import ChatList from './ChatList.jsx';


export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <div className='layout'>
                <Header />
                <div className='layout-canvas'>
                    <div className='layout-left-side'>
                        <ChatList />
                    </div>
                    <div className='layout-right-side'>
                        <MessageField />
                    </div>
                </div>
            </div>
        )
    }
}