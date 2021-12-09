# Comments

## APIs

### Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls(optional) | The classname prefix for wholly control the component style | string | `'comments'` | 

### Slots
| Name | Description |
| --- | --- |
| default(optional) | The default Vue slot |

## Example

```vue
<template>
  <Comments>
    {{ 'Hello Comments' }}
  </Comments>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Comments } from './Comments';

  @Component(
    components: {
      Comments
    }
  )
  export class App extends Vue {
    mounted () {
      console.info('mounted!')
    }
  }
</script>
```
