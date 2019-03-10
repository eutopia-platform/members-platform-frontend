export default init
const $ = require("jquery")

function init() {
  const images = $('.half-right > img')
  images.each(i => {
    const img = $(images[i])
    img.css({
      position: 'relative',
      width: img.parent().outerWidth(),
      left: img.parent().left,
      transform: 'translateX(-50%)  translateY(-50%)'
    })
  })
  positionImages()


  console.log('init parallax', images)

  window.onscroll = positionImages

  function positionImages() {
    images.each(i => {
      const img = $(images[i])
      const pivot = img.parent().offset().top + img.parent().outerHeight() / 2
      const mod = window.innerWidth > 800 ? 1 : -1
      img.css("top", img.parent().outerHeight() / 2 + mod * (pivot - (window.pageYOffset + window.innerHeight / 2)) / 2)
    })
  }
}
