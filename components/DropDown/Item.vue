<template>
  <div class="drop-down-item">
    <div v-if="title" class="drop-down-item-title">{{title}}</div>
    <div v-if="content" class="drop-down-item-content">{{content}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class DropDownItem extends Vue {
  @Prop() title!: string
  @Prop() content!: string
}
</script>

<style lang="less"> 
  .drop-down-item {
    padding: 8px 14px;
    margin-bottom: 5px;

    &-title {
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }

    &-content {
      color: #9b9b9b;
      font-size: 12px;
      line-height: 15px;
    }
  }

  .drop-down-item:hover {
    background-color: #373949;
  }
</style>
