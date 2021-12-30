<template>
  <DropDown :placement="position">
    <div class="b-nav-item">
      <slot/>
      <template v-if="type === 'dropdown'">
          <i class="fas fa-chevron-down"></i>
      </template>
    </div>
    <template v-if="type === 'dropdown'" slot="overlay">
      <DropDownList  v-for="(item, index) in listDropDown" :key="index" :title="item.title" :content="item.listDropItem"/>
    </template>
  </DropDown>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class BNavItem extends Vue {
  @Prop() readonly type!: string;
  @Prop() readonly content!: any;
  @Prop({ default: "bottomLeft" }) readonly position!: any;

  get listDropDown() {
    return this.content?.listDrop
  }
}
</script>

<style lang="less">
  .language-menu {
    .dropdown-overlay {
      width: 280px;
    }
  }

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
    }

    a {
      text-decoration: none;
      color: #fff;
    }
  }

  
</style>