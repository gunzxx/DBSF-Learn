const qrcode = require('qrcode-terminal');
const quotable = require('quotable');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');

const client = new Client();

client.initialize();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => {
    console.log('Authenticated');
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async(message) => {
    console.log(message.body);
    if (message.body === '!ping') {
        message.reply('pong');
    }
    if (message.body === '!quote') {
        const aNewQuote = await quotable.getRandomQuote();
        message.reply(aNewQuote.content + " " + "-" + " " + aNewQuote.author)
    }
});

client.on('disconnected', (reason) => {
    console.log('Client was logged out', reason);
});