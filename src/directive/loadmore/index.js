import Vue from 'vue'

Vue.directive('loadmore', {
  inserted: function(el, binding) {
    var dom = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
    dom.addEventListener('scroll', function() {
      // console.log(this.clientHeight, 'this.clientHeight')
      // console.log(this.scrollHeight, 'this.scrollHeight')
      // console.log(Math.ceil(this.scrollTop), 'this.scrollTop')
      var condition = this.scrollHeight - (Math.ceil(this.scrollTop) + 1) <= this.clientHeight * 3
      if (condition) {
        binding.value()
      }
    })
  }
})
