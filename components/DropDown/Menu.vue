<template>
  <div class="drop-down">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class DropDownMenu extends Vue {
}
</script>

<style lang="less"> 
  .drop-down {
    display: none;
    position: absolute;
    top: 100%;
    left: -20px;
    background-color: #282a36;
    padding: 14px 12px;
    border-radius: 6px;
    z-index: 999;
  }
</style>
