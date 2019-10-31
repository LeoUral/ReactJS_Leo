import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import MessageField from './components/MessageField.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header.jsx';
import Layout from './components/Layout.jsx';
import ChatList from './components/ChatList.jsx';




ReactDOM.render(

    <MuiThemeProvider>
        <Layout />
    </MuiThemeProvider>,

    document.getElementById('root'),
);

// import { script } from './script.js';

// // Урок номер 1 ниже
// // Компонент кнопки для HTML
// const ButtonComponent = () => {
//     return (
//         <button className="btn">Жми на меня</button>
//     );
// }

// const messages = ['Привет!', 'Как дела?'];
// const MessageComponent = (props) => <div className="messages"> {props.text} </div>;
// const MessageField = (props) => <div>
//     <h1>Чат</h1>
//     {props.messages.map(message => <MessageComponent text={message} />)}
//     <ButtonComponent />
// </div>;

// ReactDOM.render(
//     <MessageField messages={messages} />,
//     document.getElementById('root') ,
// );

// // обработка нажатия кнопки
// let button = document.querySelector('.btn');
// button.addEventListener('click', function (event) {
//     let newlength = messages.push('Нормально!');

//     ReactDOM.render(
//         <MessageField messages={messages} />,
//         document.getElementById('root') ,
//     );
// });

// // const element = React.createElement(
// //     'h1',
// //     { className: "element" },
// //     'Кажется, мы подключили React' ,
// // );

// // const element = <h1 className="element">Кажется, мы подключили React</h1>;
// // ReactDOM.render(
// //     element, document.getElementById('root'),
// // );

// // const content = 'Кажется, мы подключили React еще раз';
// // const Component = (props) => <h1 className="element">{props.content}</h1>;
// // ReactDOM.render(
// //     <Component content={content} />,
// //     document.getElementById('root'),
// // );
