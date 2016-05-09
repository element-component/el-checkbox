# el-checkbox
> 复选框

-----------

<style>
  .checkbox {
    margin-right: 10px;
  }
</style>

## 基本用法

<div>
  <el-checkbox
    class="checkbox"
    :model.sync="checkbox"
    value="复选框 A">
  </el-checkbox>
  <el-checkbox
    class="checkbox"
    :model.sync="checkbox"
    value="复选框 B">
  </el-checkbox>
  <el-checkbox
    class="checkbox"
    :model.sync="checkbox"
    value="复选框 C">
  </el-checkbox>
</div>

```html
<template>

  <el-checkbox
    :model.sync="checkbox"
    value="复选框 A">
  </el-checkbox>

  <el-checkbox
    :model.sync="checkbox"
    value="复选框 B">
  </el-checkbox>

  <el-checkbox
    :model.sync="checkbox"
    value="复选框 C">
  </el-checkbox>

</template>

<script>
  export default {
    data () {
      return {
        checkbox: ['选中且禁用', '复选框 A']
      }
    }
  }
</script>
```

## 禁用

<div>
  <el-checkbox
    class="checkbox"
    disabled
    :model.sync="checkbox"
    value="禁用">
    </el-checkbox>
    <el-checkbox
    class="checkbox"
    disabled
    :model.sync="checkbox"
    value="选中且禁用">
    </el-checkbox>
</div>

```html
<el-checkbox
  class="checkbox"
  disabled
  :model.sync="checkbox"
  value="禁用">
</el-checkbox>
<el-checkbox
  class="checkbox"
  disabled
  :model.sync="checkbox"
  value="选中且禁用">
</el-checkbox>
```
