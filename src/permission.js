import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({
  showSpinner: false
})

const whiteList = [
  '/table'
]
router.beforeEach(async (to, from, next) => {
  // NProgress.start()
  document.title = getPageTitle(to.meta.title)
  if (whiteList.indexOf(to.path) !== -1) {
    next()
    return
  }
    next(`/table`)
    // NProgress.done()
})

router.afterEach(() => {
  // NProgress.done()
})
