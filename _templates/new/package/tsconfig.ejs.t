---
to: packages/<%= pkg_name %>/tsconfig.json
---
{
  "extends": "<%= test_environment === 'jsdom' ? "../../tsconfig.react.json" : "../../tsconfig.json" %>",
  "include": ["./src"],
  "compilerOptions": {
    "outDir": "./dist"
  }
}
