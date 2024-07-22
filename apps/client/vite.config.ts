import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import codegen from 'vite-plugin-graphql-codegen';
import config from './graphql.codegen';

const isProduction = process.env.NODE_ENV === 'production';
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/client',

  server: {
    port: 4200,
    host: 'localhost'
  },

  preview: {
    port: 4300,
    host: 'localhost'
  },

  plugins: [
    ...(!isProduction ? [
      codegen({
        config,
        runOnBuild: true
      })
    ] : []),
    react(),
    nxViteTsPaths()
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/apps/client',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }

  // doesn't work some why
  // resolve: {
  //   alias: {
  //     '@nestjs/graphql': path.resolve(
  //       __dirname,
  //       '../../node_modules/@nestjs/graphql/dist/extra/graphql-model-shim'
  //     )
  //   }
  // }
});
