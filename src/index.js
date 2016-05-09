const ElCheckbox = require('./checkbox');

module.exports = {
  ElCheckbox,
  install(Vue) {
    Vue.component('el-checkbox', ElCheckbox);
  }
};

