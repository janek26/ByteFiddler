const isExport = process.env.NODE_ENV === 'export'

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  assetPrefix: isExport ? './' : ''
}