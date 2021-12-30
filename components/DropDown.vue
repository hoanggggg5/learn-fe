<template>
  <div class="drop-down" @mousemove="onTriggerClick" @mouseleave="onTriggerOut">
    <slot />
    <transition :name="`dropdown-${placement}`">
      <div v-if="show" :class="['dropdown-overlay', `dropdown-${placement}-overlay`]" @mousemove="onTriggerClick">
        <slot name="overlay" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class BInput extends Vue {
  @Prop({ default: 'topLeft' }) readonly placement!: string;

  show = false;
  hoverQueue: NodeJS.Timeout | null = null;

  onTriggerClick() {
    if (this.hoverQueue) {
      clearTimeout(this.hoverQueue)
    }

    this.hoverQueue = setTimeout(() => {
      this.show = true;
    }, 200)
  }

  onTriggerOut() {
    if (this.hoverQueue) {
      clearTimeout(this.hoverQueue)
    }

    this.hoverQueue = setTimeout(() => {
      this.show = false;
    }, 200)
  }
}
</script>

<style lang="less">
.dropdown {
  position: relative;
  background-color: transparent;
  border-radius: 6px;
  z-index: 999;
  display: flex;

  &-overlay {
    opacity: 1;
    position: absolute;
    margin: 5px 0;
    padding: 8px 0;
    // border: 1px solid rgba(43, 43, 43, 0.15);
    border-radius: 4px;
    background-color: #282a36;
    box-shadow: 0 0 5px rgba(43, 43, 43, 0.15);
    transition: all 0.1s;
    z-index: 999;
    cursor: pointer;
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
