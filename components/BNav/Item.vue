<template>
  <div class="b-nav-item">
    <slot/>
    <template v-if="type === 'dropdown'">
      <i class="fas fa-chevron-down"></i>
      <template v-if="content">
        <DropDownMenu>
          <DropDownList :title="title" :content="listDropDown"/>
        </DropDownMenu>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class BNavItem extends Vue {
  @Prop() readonly type!: string;
  @Prop() readonly content!: any;

  get title() {
    return this.content?.title
  }

  get listDropDown() {
    return this.content?.listDrop[0].listDropItem
  }
}
</script>

<style lang="less">
  .b-nav-item {
    display: flex;
    position: relative;
    align-items: center;
    line-height: 56px;
    padding: 0 16px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;

    .fa-chevron-down {
      zoom: 0.8;
      margin-left: 8px;
      transform: rotate(0deg);
      transition: all 0.4s ease;
    }

    ~:hover{
      .fa-chevron-down {
        transform: rotate(180deg);
        transition: all 0.4s ease;
      }

      .drop-down {
        display: block;
      }
    }

    a {
      text-decoration: none;
      color: #fff;
    }
  }
</style>