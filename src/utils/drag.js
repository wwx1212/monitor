export function dragBox(drag, canvas) {
  let initX
  let initY
  const dragWidth = parseInt(drag.offsetWidth / 2)
  const dragHeight = parseInt(drag.offsetHeight / 2)
  const offsetLeftCanvas = parseInt(canvas.getBoundingClientRect().left)
  const offsetTopCanvas = parseInt(canvas.getBoundingClientRect().top)
  let dragable = false
  let wrapLeft = getCss(drag, 'left')
  let wrapRight = getCss(drag, 'top')

  drag.addEventListener(
    'mousedown',
    function(e) {
      dragable = true
      initX = e.clientX
      initY = e.clientY
      const box = document.createElement('div')
      canvas.appendChild(box)
    },
    false
  )
  document.addEventListener('mousemove', function(e) {
    if (dragable === true) {
      const nowX = e.clientX
      const nowY = e.clientY
      const disX = nowX - initX
      const disY = nowY - initY
      drag.style.left = wrapLeft + disX + 'px'
      drag.style.top = wrapRight + disY + 'px'
    }
  })

  drag.addEventListener(
    'mouseup',
    function() {
      dragable = false
      const offsetLeftDrag = parseInt(drag.getBoundingClientRect().left)
      const offsetTopDrag = parseInt(drag.getBoundingClientRect().top)
      if ((offsetLeftDrag + dragWidth) > offsetLeftCanvas && (offsetTopDrag + dragHeight) > offsetTopCanvas) {

      }
      wrapLeft = getCss(drag, 'left')
      wrapRight = getCss(drag, 'top')
    },
    false
  )
  function getCss(ele, prop) {
    return parseInt(window.getComputedStyle(ele)[prop])
  }
}
