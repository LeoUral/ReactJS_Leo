import React from 'react';
import ReactDOM from 'react-dom';
// const element = React.createElement(
//     'h1',
//     { className: "element" },
//     'Кажется, мы подключили React' ,
// );

// const element = <h1 className="element">Кажется, мы подключили React</h1>;
// ReactDOM.render(
//     element, document.getElementById('root'),
// );

// const content = 'Кажется, мы подключили React еще раз';
// const Component = (props) => <h1 className="element">{props.content}</h1>;
// ReactDOM.render(
//     <Component content={content} />,
//     document.getElementById('root'),
// );

const messages = ['Привет!', 'Как дела?'];
const MessageComponent = (props) => <div className="messages"> {props.text} </div>;
const MessageField = (props) => <div>
    <h1>Чат</h1>
    {props.messages.map(message => <MessageComponent text={message} />)}
</div>;
ReactDOM.render(
    <MessageField messages={messages} />,
    document.getElementById('root') ,
);
