# Talkee

## APIs

### Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls(optional) | The classname prefix for wholly control the component style | string | `'talkee'` | 

### Slots
| Name | Description |
| --- | --- |
| default(optional) | The default Vue slot |

## Example

```vue
<template>
  <talkee
    v-bind="talkeeOpts"
    @init="talkeeInit"
    @error="talkeeError"
    @comment="talkeeComment"
    @login:success="talkeeLogin"
    @login:fail="talkeeLogin"
    @keyboard="talkeeKeyboard"
  />
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Talkee } from './Talkee';

  @Component(
    components: {
      Talkee
    }
  )
  export class App extends Vue {
    talkeeOpts = {
      siteId: 1,
      slug: `your slug`,
      loginUrl: "",
      apiBase: 'https://www.api.com',
      commentLength: 800,
      reply: false,
      favor: false,
    }

    mounted () {
      console.info('mounted!')
    }
  }
</script>
```
