# LoginBtn

## APIs

### Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls(optional) | The classname prefix for wholly control the component style | string | `'loginbtn'` | 

### Slots
| Name | Description |
| --- | --- |
| default(optional) | The default Vue slot |

## Example

```vue
<template>
  <LoginBtn>
    {{ 'Hello LoginBtn' }}
  </LoginBtn>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { LoginBtn } from './LoginBtn';

  @Component(
    components: {
      LoginBtn
    }
  )
  export class App extends Vue {
    mounted () {
      console.info('mounted!')
    }
  }
</script>
```
