import { defineConfig } from 'tsup';

export default defineConfig({
    splitting: true,
    clean: true, // clean up the dist folder
    dts: true, // generate dts files
    format: ['cjs', 'esm'], // generate cjs and esm files
    minify: false,
    bundle: true,
    skipNodeModulesBundle: true,
    entryPoints: ['src/index.ts'],
    watch: false,

    target: 'esnext',
    outDir: 'dist',
    entry: ['src/**/*.ts', '!src/**/*.spec.ts'], //include all files under src but not specs
    sourcemap: true,
    tsconfig: 'tsconfig.build.json', // workaround for https://github.com/egoist/tsup/issues/571#issuecomment-1760052931

    treeshake: true,

});