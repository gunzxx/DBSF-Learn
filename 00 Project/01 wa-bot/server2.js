const {
    Client
} = require('whatsapp-web.js');
const fs = require('fs');
const SESSION_FILE_PATH = './session.json';
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionCfg = require(SESSION_FILE_PATH);
}
const client = new Client({
    puppeteer: {
        headless: false
    },
    session: sessionCfg
});
client.initialize();
client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});
client.on('authenticated', (session) => {
    console.log('AUTHENTICATED', session);
    sessionCfg = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
        if (err) {
            console.error(err.message);
        }
    });
});
client.on('auth_failure', msg => {
    console.error('AUTHENTICATION FAILURE', msg);
});
client.on('ready', () => {
    console.log('READY');
});
client.on('message', async msg => {
    console.log('MESSAGE RECEIVED', msg);
});
client.on('disconnected', (reason) => {
    console.log('Client was logged out', reason);
});