export const REMOVE_CHAT = '@@chat/SEND_MESSAGE';

export const removeChat = (title) => ({
    type: REMOVE_CHAT,
    title,
});