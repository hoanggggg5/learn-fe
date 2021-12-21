<template>
  <div class="b-nav">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class BNavList extends Vue {}
</script>

<style lang="less">
  .b-nav {
    display: flex;
    height: 56px;
  }
</style>