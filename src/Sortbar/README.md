# Sortbar

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
  <Sortbar>
    {{ 'Hello Sortbar' }}
  </Sortbar>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Sortbar } from './Sortbar';

  @Component(
    components: {
      Sortbar
    }
  )
  export class App extends Vue {
    mounted () {
      console.info('mounted!')
    }
  }
</script>
```
