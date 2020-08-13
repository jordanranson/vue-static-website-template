import websiteConfig from '@/website.config'
import store from '@/store'

export const checkBreakpoint = query => {
  const regexp = /([<>=]{1,2})(.+)/g
  const [, operator, key] = regexp.exec(query)
  const breakpoint = websiteConfig.breakpoints[key]
  const width = window.innerWidth

  if (operator === '>') return width > breakpoint
  if (operator === '>=') return width >= breakpoint
  if (operator === '<') return width < breakpoint
  if (operator === '<=') return width <= breakpoint

  return false
}

function install (Vue) {
  Vue.prototype.$viewport = breakpoint => checkBreakpoint(breakpoint)
  Vue.prototype.$isMobile = () => store.state.isMobile
}

export default { install }
