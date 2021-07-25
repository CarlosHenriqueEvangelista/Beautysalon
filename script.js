// System to open and close the menu by clicking on the icons
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// System close menu by clicking on redirect links
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//System to change the header color when scrolling the page

function changeHeaderColorWhenScroll() {
  const header = document.querySelector('#header')
  const NavHeight = header.offsetHeight
  if (window.scrollY >= NavHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// Swiper system

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination'
  },

  mousewheel: true,
  keyboard: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//System to add animation to items using scrollreveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services .text, #services .card,
  #testimonials .text, #testimonials .testimonials,
  #contact .text, #contact .info,
  #footer .text, #footer .social ul li
  `,
  { interval: 100 }
)

/* System to go back to the top of the by pressing a button
 that will appear when we go through the main section */

function revealTheButtonBackToTopWhenScroll() {
  const backToTheTop = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    backToTheTop.classList.add('show')
  } else {
    backToTheTop.classList.remove('show')
  }
}

function activateMenuAtCurrentSection() {
  const sections = document.querySelectorAll('main section[id]')

  const imaginaryLine = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const imaginaryLineStart = imaginaryLine >= sectionTop
    const imaginaryLineEnd = imaginaryLine <= sectionHeight + sectionTop

    if (imaginaryLineStart && imaginaryLineEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHeaderColorWhenScroll()
  revealTheButtonBackToTopWhenScroll()
  activateMenuAtCurrentSection()
})
