# Talkee

## Example

```vue
<template>
  <div>
    <h2 class="title">{{ title }}</h2>
    <div>帖子内容</div>
    <talkee
      :siteId="1"
      :slug="1234"
      apiBase="https://talkee-test-api.firesbox.com/api"
      loginUrl="https://mixin-oauth.firesbox.com/?client_id=65fdd5af-5d3f-496a-9d62-b5cdb4d8396f&scope=PROFILE:READ+PHONE:READ&redirect_url="
      @resize="handleResize"
      :renderOpts="{
        reply: false
      }"
    />
  </div>
</template>

<script>
  export default {
    data: {
      title: '帖子标题'
    },
    method: {
      handleResize: function () {
        console.info('resize!');
      }
    }
  }
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
}
</style>
```
