# SortBar

## APIs

### Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls(optional) | The classname prefix for wholly control the component style | string | `'sortbar'` | 

### Slots
| Name | Description |
| --- | --- |
| default(optional) | The default Vue slot |

## Example

```vue
<template>
  <SortBar>
    {{ 'Hello SortBar' }}
  </SortBar>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { SortBar } from './SortBar';

  @Component(
    components: {
      SortBar
    }
  )
  export class App extends Vue {
    mounted () {
      console.info('mounted!')
    }
  }
</script>
```
