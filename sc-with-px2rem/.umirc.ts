import { defineConfig } from 'umi';

export default defineConfig({
  alias: {
  },
  extraBabelPlugins: [
    [
      'styled-components-px2rem',
      {
        rootValue: 32,
        unitPrecision: 5,
        minPixelValue: 0,
        multiplier: 1,
        transformRuntime: true,
        exclude: /![\\/]node_modules[\\/]/ // 指定为 node_modules目录
      },
    ],
  ],
  routes: [{ path: '/', component: '@/pages/index' }],
});
