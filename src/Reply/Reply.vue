<docs>
  Docs inside vue module 
</docs>

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
// import {
//   Component,
//   Vue,
//   Prop
// } from 'vue-property-decorator';

// @Component
// export default class Reply extends Vue {
//   @Prop({ default: '', type: String })
//   public msg!: string;
// }
</script>

<style lang="less" scoped>
@import './style/Reply.less';
</style>