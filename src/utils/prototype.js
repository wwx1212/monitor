export default {
  install(Vue) {
    Vue.prototype.scrollToView = function (_this, object) {
      for (const i in object) {
        let dom = _this.$refs[i]
        if (Object.prototype.toString.call(dom) !== '[object Object]') {
          dom = dom[0]
        }
        dom.$el.scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        })
        break
      }
    }
  }
}
