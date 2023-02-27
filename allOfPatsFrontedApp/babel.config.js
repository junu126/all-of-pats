// const baseConfig = require('../babel.config');

// module.exports = {
//   ...baseConfig,
//   presets: [...baseConfig.presets, 'module:metro-react-native-babel-preset'],
//   plugins: [
//     ...baseConfig.plugins,
//     [
//       'module:react-native-dotenv',
//       {
//         moduleName: '@env',
//         path: '.env',
//         blacklist: null,
//         whitelist: null,
//         safe: true,
//         allowUndefined: true,
//       },
//     ],
//   ],
// };

module.exports = {
  "presets": ["module:metro-react-native-babel-preset"]
}
