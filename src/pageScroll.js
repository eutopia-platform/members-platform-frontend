export default init

function init() {
  slides = Array.from(document.getElementsByClassName("page-slide"))
  if (slides.length == 0) return
  window.addEventListener('wheel', e => handleWheel(e))
}

const $ = require("jquery")
let slides = []
const slide_state = {
  in_animation: false,
  in_scroll: false
}

onScrollStop(() => slide_state.in_scroll = false)

function onScrollStop(callback) {
  if (!callback || typeof callback !== 'function') return
  let isScrolling
  window.addEventListener('scroll', e => {
    window.clearTimeout(isScrolling)
    isScrolling = setTimeout(callback, 66)
  }, false)
}

function scrollTo(target, callback = () => {}) {
  if (slide_state.in_animation) return
  slide_state.in_animation = true
  $('html')
    .animate({
      scrollTop: target
    }, 500, () => {
      slide_state.in_animation = false
      callback()
    })
}

function handleWheel(e) {
  if (e.deltaY == 0)
    slide_state.in_scroll = false
  if (slide_state.in_scroll || slide_state.in_animation) {
    e.preventDefault()
    return
  }
  if (Math.abs(e.deltaY) < 2) {
    return
  }
  // find slide that is currently scrolled over
  const off = 5
  const slide_top = slides.find(slide => window.pageYOffset > slide.offsetTop + off &&
    window.pageYOffset < slide.offsetTop + slide.offsetHeight - off)
  const slide_bottom = slides.find(slide => window.pageYOffset + window.innerHeight > slide.offsetTop + off &&
    window.pageYOffset + window.innerHeight < slide.offsetTop + slide.offsetHeight - off)

  if (e.deltaY > 0 ? !slide_bottom : !slide_top) return // not scrolling over any slide
  if (slide_top == slide_bottom) return // scrolling inside slide
  e.preventDefault()
  const target = e.deltaY > 0 ? slide_bottom.offsetTop :
    slide_top.offsetTop + slide_top.offsetHeight - window.innerHeight
  slide_state.in_scroll = true
  scrollTo(target)
}
