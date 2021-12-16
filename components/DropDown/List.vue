<template>
  <div class="drop-down-list">
    <template v-if="title">
      <div class="drop-down-list-title">{{title}}</div>
    </template>
    <DropDownItem v-for="(item, index) in content" :key="index" :title="item.title" :content="item.content"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class DropDownList extends Vue {
  @Prop() readonly title!: string
  @Prop() readonly content!: any
}
</script>

<style lang="less">
  .drop-down-list {
    width: 300px;
    &-title {
      height: 30px;
      padding-left: 14px;
      color: #9b9b9b;
      font-size: 14px;
      font-weight: 500;
      line-height: 30px;
    }
  }
</style>

