// base
const config = {
  devlopment: true,

  // title
  title: '后台管理系统',

  // ////////////////////////////////////////////////////////////////
  // 接口 baseURL
  baseURL: '',
  // 发布路径
  publicPath: '',

  // ////////////////////////////////////////////////////////////////
  // webpack devServer config
  devServer: {
    host: '0.0.0.0',
    port: '3500',
    proxy: [
      {
        context: ['/cc'],
        // target: 'http://172.16.0.14:17545',
        target: 'https://cs.ljlx.com/api/',
        secure: false,
        changeOrigin: true,
      },
      {
        context: ['/Net'],
        target: 'https://cs.ljlx.com/api/',
        secure: false,
        changeOrigin: true,
      },
    ],
  },

  // ////////////////////////////////////////////////////////////////
  // antd theme
  theme: {
    'primary-color': '#409eff',
    'link-color': '#409eff',
    'border-radius-base': '4px',
  },

  // 列表分页配置
  pagination: {
    current: 1,
    pageSize: 20,
    showSizeChanger: false,
    showTotal: (total) => `共 ${total} 条`,
  },
};

module.exports = config;
