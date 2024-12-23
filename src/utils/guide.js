const steps = [ {
  element: '#quickAccess',
  closeBtnText: '关闭', // 关闭按钮的文字
  nextBtnText: '下一步', // 下一步按钮的文字
  prevBtnText: '上一步', // 上一步按钮的文字
  popover: {
    // className: 'first-step-popover-class',
    title: '第一步',
    description: '快捷入口',
    position: 'left'
  }
},
  {
    element: '#payment',
    closeBtnText: '关闭', // 关闭按钮的文字
    nextBtnText: '下一步', // 下一步按钮的文字
    prevBtnText: '上一步', // 上一步按钮的文字
    popover: {
      title: '第二步',
      description: '收款',
      position: 'top'
    },
    onNext: (Element) => {
      this.$router.push('/equity/serviceSubscription')
    }
  },
  {
    element: '#renew',
    popover: {
      title: '第三步',
      description: 'Body of the popover',
      position: 'bottom'
    }
  }]

export default steps
