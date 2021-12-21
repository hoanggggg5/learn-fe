<template>
  <DropDown>
    <slot />
  </DropDown>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class DropDownMenu extends Vue {}
</script>

<style lang="less"> 
  .drop-down {
    position: relative;
    background-color: transparent;
    padding: 14px 12px;
    border-radius: 6px;
    z-index: 999;
    display: flex;

    &-overlay {
      opacity: 1;
      position: absolute;
      margin: 5px 0;
      padding: 8px 0;
      border: 1px solid rgba(43, 43, 43, 0.15);
      border-radius: 4px;
      background-color: #282a36;
      box-shadow: 0 0 5px rgba(43, 43, 43, 0.15);
      transition: all 0.1s;
      z-index: 999;
      display: flex;

      > div {
        padding: 8px;
      }
    }

    &-bottomLeft {
      &-overlay {
        transform: translate(0, 0);
        top: 100%;
        left: 0;
      }

      &-enter,
      &-leave-active {
        opacity: 0;
        left: 0;
        top: 50%;
        transform: translateX(0);
      }
    }

    &-bottomCenter {
      &-overlay {
        transform: translate(-50%, 0);
        top: 100%;
        left: 50%;
      }

      &-enter,
      &-leave-active {
        opacity: 0;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);
      }
    }

    &-bottomRight {
      &-overlay {
        transform: translate(-100%, 0);
        top: 100%;
        left: 100%;
      }

      &-enter,
      &-leave-active {
        opacity: 0;
        left: 100%;
        top: 50%;
        transform: translateX(-100%);
      }
    }

  }
</style>
