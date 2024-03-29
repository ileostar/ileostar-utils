import { Options, defineConfig } from 'tsup';

const currentNodeEnv = process.env.NODE_ENV;
const isProd = currentNodeEnv === 'build';

const commonConfig: Options = {
  minify: isProd,
  sourcemap: !isProd,
  shims: true,
  clean: true,
  dts: true,
};

export default defineConfig({
    format: ['esm', 'cjs'],
    entry: ['src/index.ts'],
    outDir: 'dist',
    splitting: false,
    clean: true,
    treeshake: true,
    dts: true,
    ...commonConfig,
  });
