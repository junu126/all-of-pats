---
to: packages/<%= pkg_name %>/package.json
---
{
  "name": "@flexteam/<%= pkg_name %>",
  "version": "0.0.0",
  "sideEffects": false,
  "scripts": {
    "build:js": "babel src --out-dir dist --extensions .ts,.tsx",
    "build:ts": "tsc -p tsconfig.json --emitDeclarationOnly",
    "build": "concurrently \"yarn build:js\" \"yarn build:ts\"",
    "prepublish": "yarn build"
  },
  "main": "./src/index.ts",
  "publishConfig": {
    "main": "./dist/index.js",
    "types": "./dist/index.d.ts"
  },
  "ntl": {
    "runner": "yarn"
  },
  "dependencies": {
    "@babel/runtime-corejs3": "^7.16.5"
  },
  "devDependencies": {
    "@babel/cli": "^7.16.0",
    "@babel/core": "^7.16.5",
    "@babel/plugin-transform-runtime": "^7.16.5",
    "@babel/preset-env": "^7.16.5",
    "@babel/preset-typescript": "^7.16.5",
    "@rushstack/eslint-patch": "^1.0.7",
    "@types/jest": "^27.5.1",
    "@types/prettier": "^2",
    "concurrently": "^6.1.0",
    "eslint": "^7.23.0",
    "jest": "^28.1.3",
    "prettier": "^2.3.2",
    "typescript": "^4.8.4"
  }
}
