import anime from 'animejs'

function findTargets (el, targets) {
  if (typeof targets === 'string') {
    return el.querySelectorAll(targets)
  }
  return targets
}

function install (Vue) {
  Vue.prototype.$anime = anime

  Vue.prototype.$prepareAnimation = function (optionsArr) {
    return Promise.all(optionsArr.map((options) => {
      const targets = findTargets(this.$el, options.targets)
      return anime({
        ...options,
        targets,
        duration: 0,
        easing: 'linear'
      }).finished
    }))
  }

  Vue.prototype.$animate = function (options) {
    const targets = findTargets(this.$el, options.targets)
    return anime({
      ...options,
      targets
    }).finished
  }

  Vue.prototype.$animateStaggered = function (options) {
    const targets = findTargets(this.$el, options.targets)
    const delay = options.delay
    const stagger = options.stagger

    delete options.delay
    delete options.stagger

    return Promise.all([...targets].map((el, i) => {
      return anime({
        ...options,
        targets: el,
        delay: delay + (stagger * i)
      }).finished
    }))
  }
}

export default { install }
