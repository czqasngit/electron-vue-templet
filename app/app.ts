const { app, BrowserWindow } = require('electron')

function createWin(): void {
    let win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.openDevTools()
    win.loadURL('http://localhost:8080')

}

app.on('ready', createWin)