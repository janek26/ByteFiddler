const isExport = process.env.NODE_ENV === 'export'

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/logicalPage': { page: '/logicalPage' },
      '/logical-operations': { page: '/logical-operations' }
    }
  },
  assetPrefix: isExport ? './' : ''
}
