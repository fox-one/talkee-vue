<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class Reply extends Vue {
    @Prop({ default: '', type: String }) msg!: string;
  }
</script>

<style lang="less" scoped>
@import './style/Reply.less';
</style>