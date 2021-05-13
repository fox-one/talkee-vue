<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="less" scoped>
@import './style/Reply.less';
</style>