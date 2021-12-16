<template>
  <button
    class="b-button"
    :loading="loading"
    :disabled="disabled"
    :type="type"
    @click="$emit('click', $event)"
  >
    <slot/>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class BButton extends Vue {
  @Prop() readonly loading!: boolean
  @Prop() readonly disabled!: boolean
  @Prop() readonly type!: string
}
</script>

<style lang="less">
  .b-button {
    min-width: 143px;
    height: 48px;
    border: 1px solid #fff;
    background-color: transparent;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  .b-button:hover {
    color: #25134f;
    background-color: #fff;
  }
</style>