import { SEND_MESSAGE, sendMessage } from "../actions/messageActions.js";

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'вы') {
                setTimeout(() => store.dispatch(
                    sendMessage(Object.keys(store.getState().messageReducer.messages).length + 1,
                        'Не приставай ко мне!!!',
                        'bot', action.chatId)), 5000)
            }
    }
    return next(action)
}
