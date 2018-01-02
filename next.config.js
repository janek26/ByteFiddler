const isExport = process.env.NODE_ENV === 'export'

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/logicalPage.html': { page: '/logicalPage' },
    }
  },
  assetPrefix: isExport ? './' : ''
}
