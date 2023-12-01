import { reactOutputTarget } from '@stencil/react-output-target';
import { Config } from '@stencil/core';

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
  ],
  extras: {
    enableImportInjection: true
  },
  testing: {
    browserHeadless: "new",
  },
};
