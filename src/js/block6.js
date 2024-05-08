let fixButton = document.querySelector('.buttonFix-open')
let fixButtonText = document.querySelector('.fix-open')
let fixWrapper = document.querySelector('.fixSwiper-wrapper')
let arrow = document.querySelector('.arrowFix-open')

fixButton.addEventListener('click', function (evt) {
  evt.preventDefault()

  if (fixButtonText.textContent === 'Показать всё') {
    arrow.src = 'img/logo/ic/expand-1.png'
    fixWrapper.style.height = '100%'
    fixButtonText.textContent = 'Скрыть'
  } else {
    arrow.src = 'img/logo/ic/expand.png'
    fixButtonText.textContent = 'Показать всё'
    fixWrapper.style.height = '160px'
  }
})
