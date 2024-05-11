document.addEventListener('DOMContentLoaded', function () {
  const callButton = document.querySelector('.call')
  const callButton768 = document.querySelector('.header-top__call')
  const modal = document.querySelector('.modal-call')
  const blur = document.querySelector('.blur-call')
  const close = document.querySelector('.close-call')
  const z = document.querySelector('.slider')
  const y = document.querySelector('.overlay-tablet')

  callButton.addEventListener('click', function () {
    modal.style.display = 'block'
    blur.style.display = 'block'
    document.body.style.overflow = 'hidden'
    z.style.zIndex = '1'
    y.style.zIndex = '1'
  })

  callButton768.addEventListener('click', function () {
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

  const callForm = document.querySelector('.call-form')
  callForm.addEventListener('submit', function (e) {
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
