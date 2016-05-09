var test = require('ava');
var Vue = require('vue');
var ElCheckbox = require('../dist/index.js');

test('el-checkbox', t => {
  t.truthy(ElCheckbox.install);
});
