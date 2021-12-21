<template>
  <nuxt-link v-if="isRouterLink" :to="to" class="a-table-row">
    <slot></slot>
  </nuxt-link>
  <div v-else class="a-table-row">
    <slot />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class TableRow extends Vue {
  @Prop() readonly isRouterLink!: boolean
  @Prop() readonly to!: string
}
</script>

<style lang="less">
  .a-table-row {
    &-coin {
      display: flex;
      
      &-logo, &-symbol, &-name {
        display: flex;
        align-items: center;
      }
  
      &-logo {
        width: 28px;
        height: 28px;
        margin-right: 20px;
        border-radius: 50%;
      }
  
      &-symbol {
        color: #303133;
        font-size: 16px;
        font-weight: normal;
        line-height: 24px;
      }
  
      &-name {
        margin-left: 10px;
        color: #909399;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }
</style>
