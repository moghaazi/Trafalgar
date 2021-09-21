// ---------------- HMR -------------------------------
if (module.hot) {
  module.hot.accept()
}

// ---------------- gsap ----------------------------------------------
import { gsap } from 'gsap'

// ---------------- Swiper -------------------------------

// import Swiper JS
// var Swiper = require('swiper')

// core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper'

// const swiper = require('swiper')

// import Swiper styles
// import 'swiper/swiper-bundle.css'

// configure Swiper to use modules
// Swiper.use([Navigation, Pagination])

// ---------------- Swiper -------------------------------
var mySwiper = new Swiper('.swiper-container', {
  // Optional
  loop: true,
  autoplay: {
    delay: 5000,
  },

  grabCursor: true,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// ---------------- Header Nav Active -------------------------------
window.myFunction = function (event) {
  // reset all menu items
  document.querySelectorAll('header nav ul li a.active').forEach(function (item) {
    item.classList.remove('active')
  })
  // mark as active selected menu item
  event.target.classList.add('active')
}

// ================ Header Animation ================================
window.onload = function() { 
  let tl = gsap.timeline({ defults: { durations: 1 } })

tl.fromTo(
  `header nav  li`,
  { y: -50, opacity: 0 },
  { y: 0, opacity: 1, ease: `back(3)`, stagger: { each: 0.1, from: `start` } }
)
tl.fromTo(
  `header .logo`,
  { y: -50, opacity: 0 },
  { y: 0, opacity: 1, delay: 0.5 },
  `.2`
)
tl.fromTo(`.header-info .text`, { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, `-=.7`)
tl.fromTo(`.header-info img`, { x: 50, opacity: 0 }, { x: 0, opacity: 1 }, `-=.5`)
}
