import React from 'react';
import Message from './Message.jsx';

const botAnswers = ['Отстань...', 'Поговори с Алисой', 'Ты кто такой?', 'Иди своей дорогой'];
const youAnswers = ['Все хорошо', 'Погода хорошая', 'Хрень полная'];

function rndYouAnswer(arrow) {
    let reg = Math.floor(arrow.length * Math.random());

    return arrow[reg];
}

function randomChoice(arr) {
    let registr = Math.floor(arr.length * Math.random());

    return arr[registr];
}

export default class MessageField extends React.Component {
    state = {
        messages: ['Бот:', 'Привет!', 'Как дела?'],
    };

    componentDidUpdate() {
        const { messages } = this.state;
        if (messages[messages.length - 2] === 'Вы:') {
            setTimeout(() => this.setState({ 'messages': [...messages, 'Бот:', randomChoice(botAnswers)] }), 1000);
        }
    }

    handleSendMessage = () => {
        const { messages } = this.state;
        this.setState({ 'messages': [...messages, 'Вы:', rndYouAnswer(youAnswers)] });
    };

    render() {
        const { messages } = this.state;

        const messageElements = messages.map(message => <Message key={Message} text={message} />);

        return (
            <div>
                <h1>Чат</h1>
                {messageElements}
                <button onClick={this.handleSendMessage}>Отправить</button>
            </div >
        )
    }
}