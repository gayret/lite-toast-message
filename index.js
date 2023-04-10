import './index.css'

function message() {
  const container = document.createElement('div')
  container.classList.add('toast-container')
  document.body.appendChild(container)

  function show(type, message, title) {
    const toast = document.createElement('div')
    toast.classList.add('toast', `toast-${type}`, 'hide')
    toast.innerHTML = `
      <div class="toast-header">
        <span class="toast-title">${title !== undefined ? title : ''}</span>
      </div>
      <div class="toast-body">
        ${message}
      </div>
    `
    container.appendChild(toast)
    toast.style.top = `calc(50% - ${toast.offsetHeight / 2}px)`
    toast.style.left = `calc(50% - ${toast.offsetWidth / 2}px)`
    setTimeout(() => {
      toast.classList.remove('hide')
      toast.classList.add('show')
    }, 100)
    setTimeout(() => {
      container.removeChild(toast)
    }, 3000)
  }

  return {
    success: function (message, title) {
      show('success', message, title)
    },
    error: function (message, title) {
      show('error', message, title)
    },
    warning: function (message, title) {
      show('warning', message, title)
    },
    info: function (message, title) {
      show('info', message, title)
    },
  }
}

const toastMessage = message()

module.exports = toastMessage
