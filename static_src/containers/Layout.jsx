import React from 'react';
import PropTypes from "prop-types";
import MessageField from './MessageField.jsx';
import ChatList from './ChatList.jsx';
import Header from './Header.jsx';
import '../styles/style.css';
import { bindActionCreators } from 'redux';
import { sendMessage } from "../actions/messageActions.js";
import connect from 'react-redux/es/connect/connect';




export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        // sendMessage: PropTypes.func.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <div className='layout'>
                <Header chatId={this.props.chatId} />
                <div className='layout-canvas'>
                    <div className='layout-left-side'>
                        <ChatList />
                    </div>
                    <div className='layout-right-side'>
                        <MessageField
                            chatId={this.props.chatId}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = ({ }) => ({});

// const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Layout);