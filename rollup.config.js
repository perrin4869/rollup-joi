import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import builtins from "builtin-modules";

export default {
  external: builtins,
  output: { format: 'cjs', sourcemap: true, file: 'index.out.js' },
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    commonjs({
      include: [/node_modules/, "index.js"],
      // transformMixedEsModules: true,
      // dynamicRequireTargets: [
      //   "**/node_modules/joi/**/*.js",
      // ],
    }),
    json(),
  ],
};
