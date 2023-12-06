import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: '@lexmin0412/wc',
      proxiesFile: '../components-react/lib/components/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@lexmin0412/wc',
      proxiesFile: '../components-vue/lib/components.ts',
    }),
  ],
  extras: {
    // 支持 vite 生产构建(修复vite生产构建后渲染空标签的问题)
    enableImportInjection: true
  },
  testing: {
    browserHeadless: "new",
  },
};
