<script>
  /**
   * checkbox
   * @module components/basic/checkbox
   * @desc 多选按钮
   * @param {string[]} model - 绑定值
   * @param {string} value - 真实值
   * @param {string} [label] - 显示值
   * @param {boolean} [disabled=false] - 是否禁用
   *
   * @example
   * <el-checkbox :model.sync="data" value="Jack"></el-checkbox>
   * <el-checkbox :model.sync="data" value="John"></el-checkbox>
   * <el-checkbox :model.sync="data" value="Mike" disabled></el-checkbox>
   */
  export default {
    name: 'ElCheckbox',

    elementName: 'ElCheckbox',

    props: {
      model: {
        type: Array,
        default() {
          return [];
        },
        twoWay: true,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      label: String,
      disabled: Boolean
    },

    computed: {
      checked() {
        return this.model.indexOf(this.value) > -1;
      }
    },

    data() {
      return {
        isLimit: false
      };
    },

    events: {
      ['element.checkbox.disabled']() {
        if (this.checked) {
          return;
        }

        this.isLimit = true;
      },

      ['element.checkbox.enabled']() {
        this.isLimit = false;
      }
    },

    watch: {
      checked(sure) {
        this.$dispatch('element.checkbox', sure);
      }
    }
  };
</script>

<template>
  <label
    block="element-checkbox">
    <span elem="input">
      <span elem="inner"
        :class="{
          'is-disabled': isLimit || disabled,
          'is-checked': checked
        }">
      </span>
      <input
        elem="original"
        :value="value"
        v-model="model"
        type="checkbox"
        :disabled="isLimit || disabled">
    </span>
    <span
      elem="label"
      v-text="label || value"></span>
  </label>
</template>
