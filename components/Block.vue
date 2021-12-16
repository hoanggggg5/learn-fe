<template>
  <div class="content-block">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class Table extends Vue {
  @Prop() readonly blockName!: string;
}
</script>

<style lang="less">
.content-block {
  display: flex;
  justify-content: center;
  
  &.pb-none {
    padding-bottom: 4px;
  }

  &.table-album-music{
    width: 1200px;
  }
}
</style>
