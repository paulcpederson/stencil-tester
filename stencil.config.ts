import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-starter-project-name',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  bundles: [
    { components: ['my-component'] },
    { components: ['my-other-component'] }
  ]
};
