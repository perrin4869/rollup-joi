import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-typescript2";
import builtins from "builtin-modules";

export default {
  external: builtins,
  output: { format: 'cjs', sourcemap: true, file: 'index.ts.out.js' },
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    commonjs({
      include: [/node_modules/, "index.js", "index.ts"],
      transformMixedEsModules: true,
      dynamicRequireTargets: [
        "**/node_modules/joi/**/*.js",
      ],
    }),
    typescript({
      tsconfigDefaults: {
        compilerOptions: {
          module: "ESNext",
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
          esModuleInterop: true,
          lib: ["es2017", "es2019", "es2020", "DOM"],
          moduleResolution: "node",
          noUnusedLocals: true,
          noUnusedParameters: true,
          sourceMap: true,
          target: "es2019",
          sourceRoot: "/"
        },
        exclude: ["**/node_modules"],
        include: ["index.ts"]
      }
    }),
    json(),
  ],
};
