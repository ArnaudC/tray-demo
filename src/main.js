const electron = require('electron');

const app = electron.app
const {BrowserWindow} = electron

app.on('ready', _ => {
    console.log('tray')    
    let win = new BrowserWindow({
        height: 400,
        width: 400})
})
