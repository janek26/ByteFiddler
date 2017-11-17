const isExport = process.env.NODE_ENV === 'export'

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/logicalPage': { page: '/logicalPage' }
    }
  },
  assetPrefix: isExport ? './' : ''
}
