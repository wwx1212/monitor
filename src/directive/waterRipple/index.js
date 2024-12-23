import Vue from 'vue'

Vue.directive('ripple', {
  inserted: function(el, binding) {
    el.onmouseenter = function() {

    }
  }
})
