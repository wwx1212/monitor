function resizes() {
  const w = document.documentElement.clientWidth
  document.documentElement.style.fontSize = (w / 1440) * 10 + 'px'
}

export default resizes
