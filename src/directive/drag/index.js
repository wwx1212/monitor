import Vue from 'vue'

Vue.directive('drag', {
  inserted: function(el, binding, vnode) {
    debugger
    // 绑定鼠标按下事件
    document.addEventListener('mousedown', (e) => {
    // 阻止事件冒泡
      e.stopPropagation()
      // 只绑定当前元素 当拖拽子元素时 不会发生移动
      if (e.target === el) {
      // 设置变量postionFlag 绑定在 父元素上 判断当前鼠标是否在要拖拽的元素内
        el.postionFlag =
          e.clientX > el.offsetLeft &&
          e.clientX < el.offsetLeft + el.clientWidth &&
          e.clientY > el.offsetTop &&
          e.clientY < el.offsetTop + el.clientHeight
        if (el.postionFlag) {
        // 由于定位居中使用的是  left: 0;top: 0;right: 0;bottom: 0;margin: auto; 此时元素 具体top和left需要重新赋值 方便后面计算
          el.style.top = el.offsetTop + 'px'
          el.style.left = el.offsetLeft + 'px'
          // 重写margin属性 不然 有问题
          el.style.margin = '0px'
          // 将鼠标当前坐标挂在到window对象上
          window.OriginMouseX = e.clientX
          window.OriginMouseY = e.clientY
        }
      }
    })
    // 鼠标移动事件
    document.addEventListener('mousemove', function(e) {
    // 判断是否出界函数
      function ifOut(left, top, relativeElement) {
        return (
          left <= relativeElement.clientWidth - el.clientWidth &&
          top <= relativeElement.clientHeight - el.clientHeight &&
          left >= 0 &&
          top >= 0
        )
      }
      // 只有鼠标在 元素内 鼠标移动才是有意义的
      if (el.postionFlag) {
      // 阻止默认事件 加上 不然有问题
        e.preventDefault()
        // 根据 ref找到需要相对的元素，没有就默认是body
        const relativeElement = vnode.context.$refs[binding.value] ? vnode.context.$refs[binding.value] : document.body
        // 确定元素新坐标
        const newLeft = e.clientX - window.OriginMouseX + el.offsetLeft
        const newTop = e.clientY - window.OriginMouseY + el.offsetTop
        if (ifOut(newLeft, newTop, relativeElement)) {
        // 重新挂载鼠标坐标
          window.OriginMouseX = e.clientX
          window.OriginMouseY = e.clientY
          // 改变元素位置
          el.style.left = newLeft + 'px'
          el.style.top = newTop + 'px'
        }
      } else {
        el.postionFlag = false
      }
    })
    document.addEventListener('mouseup', function(e) {
    // 鼠标抬起 停止移动
      el.postionFlag = false
    })
  }
}
)

