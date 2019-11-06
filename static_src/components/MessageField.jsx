import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message.jsx';
import '../styles/style.css';
import PropTypes from 'prop-types';

// const botAnswers = ['Отстань...', 'Поговори с Алисой', 'Ты кто такой?', 'Иди своей дорогой'];

// function randomChoice(arr) {
//     let registr = Math.floor(arr.length * Math.random());

//     return arr[registr];
// };

export default class MessageField extends React.Component {

    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };

    // static defultProps = {
    //     chatId: 1,
    // };

    state = {
        // chats: [[1, 2], [], []],
        // messages: [
        //     { text: "Привет!", sender: 'bot' },
        //     { text: "Как дела человек?", sender: 'bot' }
        // ],
        input: '',
    };

    //ставим фокус на <TextInput> при монтировании компонента
    //функция вызывается единожды после первой отрисовки компонета
    // componentDidMount() {
    //     this.TextInput.current.focus();
    // };

    handleSendMessage = (message, sender) => {
        if (this.state.input.length > 0 || sender === 'bot') {
            this.props.sendMessage(message, sender);
        }
        if (sender === 'вы') {
            this.setState({ input: '' });
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.hendleSendMessage(this.state.input, 'вы');
        }
    };

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.messages.length < this.state.messages.length &&
    //         this.state.messages[this.state.messages.length - 1].sender === 'вы') {
    //         // setTimeout(() => this.setState({ messages: [...this.state.messages, { text: randomChoice(botAnswers), sender: "bot" }] }), 1000);
    //         setTimeout(() => this.sendMessage(randomChoice(botAnswers), 'bot'), 1000);
    //         // setTimeout(() => this.sendMessage('Не приставай ко мне!', 'bot'), 1000);
    //     }
    // };

    // // handleClick = (message) => {
    // //     this.sendMessage(message)
    // // };

    // handleKeyUp = (event, message, sender) => {
    //     if (event.keyCode === 13) {
    //         // this.setState({ messages: [...this.state.messages, { text: event.target.value, sender: 'вы' }] });
    //         this.sendMessage(message, sender)
    //     }
    // };

    // handleChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value });
    //     //использовать [event.target.name] - при нескольких полях ввода и в html:
    //     // <input name="input"  (как пример)
    // };

    // sendMessage = (message, sender) => {
    //     const { chats } = this.state;
    //     chats[this.props.chatId - 1] = [...chats[this.props.chatId - 1], this.state.messages.length + 1];

    //     this.setState({
    //         messages: [...this.state.messages, { text: message, sender: sender }],
    //         chats: chats,
    //         input: '',
    //     });
    // };

    render() {
        // const { chats, messages, input } = this.state;
        const { chatId, messages, chats } = this.props;

        const messageElements = chats[chatId].messageList.map(messageId => (
            <Message
                key={messageId}
                text={messages[messageId].text}
                sender={messages[messageId].sender}
            />));

        return [
            <div key='messageElements' className="message-field">
                {messageElements}
            </div>,
            <div key='textInput' style={{ width: '100%', display: 'flex' }}>

                <TextField
                    name='input'
                    fullWidth={true}
                    hintText="Введите сообщение"
                    style={{ fontSize: '22px' }}
                    onChange={this.handleChange}
                    value={this.state.input}
                    onKeyUp={this.handleKeyUp}
                />
                <FloatingActionButton onClick={() => this.handleSendMessage(this.state.input, 'вы')}>
                    <SendIcon />
                </FloatingActionButton>
            </div>

        ]
    }
}