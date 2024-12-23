import Vue from 'vue'

const addWaterMarker = (str, parentNode, font, textColor) => {
  const can = document.createElement('canvas')
  parentNode.appendChild(can)
  can.width = 205
  can.height = 140
  can.style.display = 'none'
  const cans = can.getContext('2d')
  cans.rotate((-20 * Math.PI) / 180)
  cans.font = font || '16px Microsoft JhengHei'
  cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
  cans.textAlign = 'left'
  cans.textBaseline = 'middle'
  cans.fillText(str, can.width / 10, can.height / 2)
  parentNode.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
}

Vue.directive('waterMarker', {
  inserted(el, binding) {
    addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
  }
})
