<template>
  <div>
    <el-cascader v-model="address" :options="options" :size="size" clearable />
  </div>
</template>

<script>
import { regionData } from 'element-china-area-data'

export default {
  name: 'ChinaAreaData',
  props: {
    value: {},
    size: {
      type: String,
      default: 'small'
    }
  },
  data() {
    return {
      address: '',
      options: regionData
    }
  },
  watch: {
    value: {
      handler(val) {
        if (val) val.split(',')
      },
      deep: true,
      immediate: true
    },
    address: {
      handler(val) {
        if (val.length > 0) val = val.join(',')
        this.$emit('input', val)
      },
      deep: true
    },
    options: {
      handler(val) {
        if (val) {
          this.ergodicOptions(val)
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    ergodicOptions(arr) {
      arr.forEach(item => {
        item.value = item.label
        if (item.children && item.children.length > 0) {
          this.ergodicOptions(item.children)
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
:deep.el-cascader {
  width: 100%;
}
</style>
