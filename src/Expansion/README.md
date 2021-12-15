# Expansion

## APIs

### Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls(optional) | The classname prefix for wholly control the component style | string | `'expansion'` | 

### Slots
| Name | Description |
| --- | --- |
| default(optional) | The default Vue slot |

## Example

```vue
<template>
  <Expansion>
    {{ 'Hello Expansion' }}
  </Expansion>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Expansion } from './Expansion';

  @Component(
    components: {
      Expansion
    }
  )
  export class App extends Vue {
    mounted () {
      console.info('mounted!')
    }
  }
</script>
```
