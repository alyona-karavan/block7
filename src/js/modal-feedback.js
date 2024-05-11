document.addEventListener('DOMContentLoaded', function () {
  const chatButton = document.querySelector('.chat')
  const chatButton768 = document.querySelector('.header-top__chat')
  const modal = document.querySelector('.modal-feedback')
  const blur = document.querySelector('.blur')
  const close = document.querySelector('.close')
  const z = document.querySelector('.slider')
  const y = document.querySelector('.overlay-tablet')

  chatButton.addEventListener('click', function () {
    modal.style.display = 'block'
    blur.style.display = 'block'
    document.body.style.overflow = 'hidden'
    z.style.zIndex = '1'
    y.style.zIndex = '1'
  })

  chatButton768.addEventListener('click', function () {
    modal.style.display = 'block'
    blur.style.display = 'block'
    document.body.style.overflow = 'hidden'
    z.style.zIndex = '1'
    y.style.zIndex = '1'
  })

  close.addEventListener('click', function () {
    modal.style.display = 'none'
    blur.style.display = 'none'
    document.body.style.overflow = 'auto'
    z.style.zIndex = '999'
    y.style.zIndex = '10'
  })

  blur.addEventListener('click', function () {
    modal.style.display = 'none'
    blur.style.display = 'none'
    document.body.style.overflow = 'auto'
    z.style.zIndex = '999'
    y.style.zIndex = '10'
  })

  const feedbackForm = document.querySelector('.feedback-form')
  feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault()
    // process form data here
    alert('Форма отправлена!')
    modal.style.display = 'none'
    blur.style.display = 'none'
    document.body.style.overflow = 'auto'
    z.style.zIndex = '999'
    y.style.zIndex = '10'
  })
})
