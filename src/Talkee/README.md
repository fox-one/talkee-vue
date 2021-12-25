# TalkeeNext

## APIs

### Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls(optional) | The classname prefix for wholly control the component style | string | `'talkeenext'` | 

### Slots
| Name | Description |
| --- | --- |
| default(optional) | The default Vue slot |

## Example

```vue
<template>
  <TalkeeNext>
    {{ 'Hello TalkeeNext' }}
  </TalkeeNext>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { TalkeeNext } from './TalkeeNext';

  @Component(
    components: {
      TalkeeNext
    }
  )
  export class App extends Vue {
    mounted () {
      console.info('mounted!')
    }
  }
</script>
```
