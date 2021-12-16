<template>
  <div class="auth-container">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class MyClass extends Vue {

}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  .auth-container {
    height: 100vh;
    background-color: #00af90;
    background-image: url('https://www.mexc.com/images/login-bg.png?v=100001');
    background-size: contain;
  }
</style>
