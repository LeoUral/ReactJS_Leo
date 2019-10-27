import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import ListExampleChat from './ChartList.jsx'
import Message from './Message.jsx';
import '../styles/style.css';

const botAnswers = ['Отстань...', 'Поговори с Алисой', 'Ты кто такой?', 'Иди своей дорогой'];
// const youAnswers = ['Все хорошо', 'Погода хорошая', 'Хрень полная'];

// function rndYouAnswer(arrow) {
//     let reg = Math.floor(arrow.length * Math.random());
// return arrow[reg];
// }

function randomChoice(arr) {
    let registr = Math.floor(arr.length * Math.random());

    return arr[registr];
}
// исправление = 2
export default class MessageField extends React.Component {
    // создадим фокус на поле input с помощью ref
    constructor(props) {
        super(props);
        //сщздаем ref в поле 'textInput' для хранения DOM-элемента
        this.textInput = React.createRef();
    }
    state = {
        messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела человек?", sender: 'bot' }],
        input: '',
    };

    //ставим фокус на <TextInput> при монтировании компонента
    //функция вызывается единожды после первой отрисовки компонета
    componentDidMount() {
        this.textInput.current.focus();
    };

    componentDidUpdate() {
        // const { messages } = this.state;
        if (this.state.messages[this.state.messages.length - 1].sender === 'вы') {
            setTimeout(() => this.setState({ messages: [...this.state.messages, { text: randomChoice(botAnswers), sender: "bot" }] }), 200);
        }
    };

    // handleSendMessage = (event) => {
    //     // const { messages } = this.state;
    //     this.setState({ messages: [...this.state.messages, { text: event.target.value, sender: "вы" }] });
    // };

    handleClick = (message) => {
        this.sendMessage(message)
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            // this.setState({ messages: [...this.state.messages, { text: event.target.value, sender: 'вы' }] });
            this.sendMessage(event.target.value)
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        //использовать [event.target.name] - при нескольких полях ввода и в html:
        // <input name="input"  (как пример)
    };

    sendMessage = (message) => {
        this.setState({
            messages: [...this.state.messages, { text: message, sender: 'вы' }],
            input: '',
        });
    };

    render() {
        // const { messages } = this.state;
        const messageElements = this.state.messages.map((messages) => <Message key={Message} text={messages.text} sender={messages.sender} />);

        return (
            <div>
                <h1>Чат</h1>
                <div className="layout">

                    <div className="chat-list">
                        {ListExampleChat}
                    </div>

                    <div className="message-field">
                        {messageElements}
                    </div>
                    <TextField ref={this.textInput}
                        // связываем ref <TextInput> с 'trxtInput' созданным в конструкторе
                        name='input'
                        fullWidth={true}
                        hintText="Введите сообщение"
                        style={{ fontSize: '22px' }}
                        onChange={this.handleChange}
                        value={this.state.input}
                        onKeyUp={(event) => this.handleKeyUp(event, this.state.input)} />
                    <FloatingActionButton
                        onClick={() => this.handleClick(this.state.input)}>
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}