// import Swiper, { Pagination } from 'swiper'
import Swiper, { Pagination } from '../../node_modules/swiper/swiper-bundle'

let m = window.matchMedia('(max-width: 767px)')

if (m.matches) {
  const swiper = new Swiper('.swiper', {
    // // Optional parameters

    slidesPerView: 'auto',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}
