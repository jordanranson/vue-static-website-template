export default {
  meta () {
    return {
      title: 'Fancy New Page'
    }
  },

  metaInfo () {
    const {
      siteName,
      titleTemplate,
      defaultDescription,
      previewImageUrl,
      faviconUrl,
      touchIconUrl
    } = this.$constants.meta

    const {
      title,
      description
    } = this.$options.meta.call(this)

    const finalDescription = description || defaultDescription

    return {
      title,
      titleTemplate,
      htmlAttrs: {
        lang: this.$store.state.lang
      },
      meta: [
        { name: 'description', content: finalDescription },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: titleTemplate.replace('%s', title) },
        { name: 'twitter:description', content: finalDescription },
        { name: 'twitter:image', content: previewImageUrl },
        // Facebook OpenGraph
        { property: 'og:title', content: title },
        { property: 'og:site_name', content: siteName },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: previewImageUrl },
        { property: 'og:description', content: finalDescription },
        // Mobile features
        { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' }
      ],
      link: [
        { rel: 'shortcut icon', href: faviconUrl },
        { rel: 'icon', href: touchIconUrl },
        { rel: 'apple-touch-icon', href: touchIconUrl }
      ]
    }
  }
}
