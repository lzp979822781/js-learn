const { ipcRenderer } = require('electron')
window.onload = function () {
  let oInput = document.getElementById('txt')
  let val = localStorage.getItem('name')

  oInput.value = val


  // 在 sub 中发送数据给 index.js 
  let oBtn = document.getElementById('btn')

  oBtn.addEventListener('click', () => {
    ipcRenderer.send('stm', '来自于sub进程')
  })

  // 接收数据
  ipcRenderer.on('its', (ev, data) => {
    console.log(data)
  })
}