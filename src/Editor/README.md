# Editor

## APIs

### Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls(optional) | The classname prefix for wholly control the component style | string | `'editor'` | 

### Slots
| Name | Description |
| --- | --- |
| default(optional) | The default Vue slot |

## Example

```vue
<template>
  <Editor>
    {{ 'Hello Editor' }}
  </Editor>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Editor } from './Editor';

  @Component(
    components: {
      Editor
    }
  )
  export class App extends Vue {
    mounted () {
      console.info('mounted!')
    }
  }
</script>
```
