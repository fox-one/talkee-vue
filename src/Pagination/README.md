# Pagination

## APIs

### Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls(optional) | The classname prefix for wholly control the component style | string | `'pagination'` | 

### Slots
| Name | Description |
| --- | --- |
| default(optional) | The default Vue slot |

## Example

```vue
<template>
  <Pagination>
    {{ 'Hello Pagination' }}
  </Pagination>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Pagination } from './Pagination';

  @Component(
    components: {
      Pagination
    }
  )
  export class App extends Vue {
    mounted () {
      console.info('mounted!')
    }
  }
</script>
```
