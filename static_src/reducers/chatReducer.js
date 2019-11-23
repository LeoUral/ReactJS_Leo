import update from 'react-addons-update';
import { SEND_MESSAGE, SUCCESS_MESSAGES_LOADING } from '../actions/messageActions.js';
import { ADD_CHAT, DELETE_CHAT, SUCCESS_CHATS_LOADING } from '../actions/chatActions.js';


const initialStore = {
    chats: {
        1: { title: 'чат 1', messageList: [] },
        2: { title: 'чат 2', messageList: [] },
        3: { title: 'чат 3', messageList: [] },
    },
    // chats: {},
    isLoading: true,
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: {
                    $merge: {
                        [action.chatId]: {
                            title: store.chats[action.chatId].title,
                            messageList: [...store.chats[action.chatId].messageList, action.messageId]
                        }
                    }
                },
            });
        }

        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: { $set: action.payload.entities.chats },
                isLoading: { $set: false },
            });
        }

        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: {
                    $merge: {
                        [chatId]: {
                            title: action.title, messageList: []
                        }
                    }
                },
            });
        }

        case DELETE_CHAT: {
            // const deleteChat = store.chats.splice(action.chatId, 1);
            return update(store, {
                // store.chats.splice((action.chatId), 1),
                // chats: Object.assign({}, store.chats),
                // chats: Object.assign({}, store.chats),
            });
        }

        default:
            return store;
    }
}