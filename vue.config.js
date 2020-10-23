module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio-thomas-vue/'
    : '/'
}
