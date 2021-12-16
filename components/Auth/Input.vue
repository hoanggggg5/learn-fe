<template>
  <div class="auth-input-container">
    <BInput
      :class="['auth-input', { 'auth-input-showerror': error !== '' }]"
      :value="value"
      :type="htmlInputType"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="(value) => $emit('input', value)"
    >
      <template slot="prefix">
        {{label}}
      </template>
      <template v-if="type === 'password'" slot="suffix">
        <span v-if="showPassword" @click="showPassword = !showPassword">
          <i class="far fa-eye"></i>
        </span>
        <span v-else @click="showPassword = !showPassword">
          <i class="far fa-eye-slash"></i>
        </span>
      </template>
      <template v-else-if="$slots['suffix']" slot="suffix">
        <slot name="suffix" />
      </template>
    </BInput>
    <span class="auth-input-error">
      {{ error }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class AuthInput extends Vue {
  @Prop() readonly value!: string
  @Prop() readonly type!: string
  @Prop() readonly placeholder!: string
  @Prop() readonly disabled!: boolean
  @Prop() readonly label!: boolean
  @Prop({ default: '' }) readonly error!: string

  showPassword: boolean = false

  get htmlInputType() {
    if (this.showPassword) return 'text'

    return this.type
  }
}
</script>

<style lang="less">
.auth-input {
  position: relative;
  display: flex;
  height: 50px;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eee;

  &-showerror {
    border-bottom: 1px solid #df384e;

    .border {
      background-color: #df384e !important;
    }
  }

  .b-input-prefix {
    margin-right: 18px;
    min-width: 70px;
    font-size: 14px;
  }

  .b-input-suffix {
    cursor: pointer;
    font-size: 12px;
    color: #ccc;
    margin: 10px;
    widows: 100%;
  }

  &-container {
    position: relative;

    .border {
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 1px;
      background-color: #00af90;
      transform: scaleX(0);
      transform-origin: center;
      transition: all 0.15s ease;
    }

    input {
      flex: 1;
      padding: 6px 10px;
      width: 100px;
      font-size: 15px;
      border: none;

      &:focus {
        outline: none;
      }

      &:focus ~ .border{
        transform: scaleX(1);
      }
    }
  }

  &-error {
    display: block;
    height: 18px;
    padding-top: 6px;
    text-align: center;
    font-size: 12px;
    color: #df384e;
  }
}
</style>
