function resize() {
  //  获取html的宽度
  window.addEventListener('resize', () => {
    const w = document.documentElement.clientWidth
    document.documentElement.style.fontSize = (w / 1440) * 10 + 'px'
  })
}

export default resize
