// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'pkg_name',
    message: '패키지 이름',
  },
  {
    type: 'select',
    name: 'test_environment',
    message: 'jest 테스트 환경',
    choices: ['jsdom', 'node'],
  },
];
