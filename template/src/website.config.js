const pkg = require('../package.json')

module.exports = {
  meta: {
    siteName: pkg.title,
    titleTemplate: `%s | ${pkg.title}`,
    defaultDescription: 'My fancy new static site.',
    previewImageUrl: '',
    faviconUrl: '/favicon.ico',
    touchIconUrl: '/logo.png'
  },
  lang: {
    default: 'en',
    supported: ['en']
  },
  // Note: these should match the breakpoints in _global.sass
  breakpoints: {
    phone: 320,
    tablet: 768,
    desktop: 1024,
    highdef: 1440
  }
}
