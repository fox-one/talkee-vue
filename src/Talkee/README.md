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
      loginBase="https://mixin-oauth.firesbox.com"
      clientId="2827d81f-6ae0-4842-b92f-6576afe36863"
    />
  </div>
</template>

<script>
  export default {
    data: {
      title: '帖子标题'
    }
  }
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
}
</style>
```
