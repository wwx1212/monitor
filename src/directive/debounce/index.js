import Vue from 'vue'

/**
 * 防抖 防止重复点击
 * 传参：v-debounce="() =>{handleFun(arg)}"
 * 不传参:v-debounce="handleFun"
 * delayTime:延迟的时间,只执行最后一次
 */
Vue.directive('debounce', {
  bind(el, binding, vnode, oldvnode) {},
  inserted: function(el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 3000)
      }
    })
    /* const delayTime = el.getAttribute('d-time') || 1000
    el.onclick = Debounce(function() {
      binding.value()
    }, delayTime) */
  }
})
