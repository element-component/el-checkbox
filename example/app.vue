<script>
  import Vue from 'vue';
  import ElCheckbox from './../src/index';

  Vue.use(ElCheckbox);

  export default {
    name: 'app',

    template: require('./demo.md'),

    data() {
      return {
        checkbox: ['选中且禁用', '复选框 A']
      };
    }
  };
</script>
