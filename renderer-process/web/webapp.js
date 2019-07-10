const {BrowserWindow} = require('electron').remote
const path = require('path')

const newWindowBtn = document.getElementById('external-webapp')

newWindowBtn.addEventListener('click', (event) => {
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.on('close', () => { win = null })
  win.loadURL("https://www.google.com")
  win.show()
})
