const TelegramBot = require('node-telegram-bot-api');

//Инфа по боту, токены и т.д
const token = '7744699540:AAH375uB1jJkg-7nBOp4YLPHGrxWv96LNHQ';
const bot = new TelegramBot(token, {polling : true});
const url = 'https://www.google.com'

bot.on('message', async(msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Привет! Мы открыли наш интернет-магазин прямо в телеграм, нажимай на кнопку снизу, чтобы зайти в мини-приложение', {
            reply_markup: {
                inline_keyboard : [
                    [
                        {text : 'Открыть магазин в Telegram-mini-app', web_app: {url}}
                    ]
                ]
            }
        });
    }
})