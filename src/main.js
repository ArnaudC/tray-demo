const electron = require('electron');
const path = require('path')
const {app, BrowserWindow, Tray, Menu} = electron

app.on('ready', _ => {
    console.log('The tray is now visible')
    const tray = new Tray(path.join('img', 'tray.png'))
    const menu = Menu.buildFromTemplate([{
        label: 'Wow',
        click: _ => console.log('in')
    }, {
        label: 'Label 2',
        click: _ => console.log('label 2')
    }, {
        label: 'quit',
        click: _ => app.quit()
    }])
    tray.setToolTip('This is my application.')    
    tray.setContextMenu(menu)
})
