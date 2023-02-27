---
to: packages/<%= pkg_name %>/tsconfig.build.json
---
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "exclude": ["**/*.test.ts", "**/*.spec.ts"]
}
