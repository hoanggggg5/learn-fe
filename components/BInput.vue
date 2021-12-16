<template>
  <div 
    :class="[
      'b-input',
      { 'b-input-focus': isFocus }
    ]">
    <div v-if="$slots['prefix']" class="b-input-prefix">
      <slot name="prefix" />
    </div>
    <input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      @focus="isFocus = !isFocus"
      @blur="isFocus = !isFocus"
    />
    <div v-if="$slots['suffix']" class="b-input-suffix">
      <slot name="suffix" />
    </div>
    <!-- <span class="border"></span> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class BInput extends Vue {
  @Prop() readonly value!: string
  @Prop({ default: 'text' }) readonly type!: string
  @Prop() readonly placeholder!: string
  @Prop() readonly disabled!: boolean

  isFocus: boolean = false
}
</script>

<style lang="less">
.b-input {
  // &:focus {
  //   outline: none;
  // }
  position: relative;
  // transform: scaleX(1);
  &-focus {
    position: absolute;
    ::after {
      content: "";
      display: block;
      bottom: -1px;
      right: 0;
      left: 0;
      position: absolute;
      height: 1px;
      background-color:#00af90;
      // transform: scaleX(0);
      // transform-origin: center;
      // transition: all 0.15s ease;
    }
  }
}
</style>
