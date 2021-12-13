// base
const config = {
  devlopment: true,

  // title
  title: 'react-webpack-babel',

  // ////////////////////////////////////////////////////////////////
  // 接口 baseURL
  baseURL: '',
  // 发布路径
  publicPath: '',

  // ////////////////////////////////////////////////////////////////

  // 列表分页配置
  pagination: {
    current: 1,
    pageSize: 20,
    showSizeChanger: false,
    showTotal: (total) => `共 ${total} 条`,
  },
};

module.exports = config;
