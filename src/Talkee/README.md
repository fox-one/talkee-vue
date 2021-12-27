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
  <Talkee>
    {{ 'Hello Talkee' }}
  </Talkee>
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
    mounted () {
      console.info('mounted!')
    }
  }
</script>
```
