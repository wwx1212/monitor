function resize(el) {
  const w = el.clientWidth
  document.documentElement.style.fontSize = (w / 1440) * 10 + 'px'
}

export default resize
