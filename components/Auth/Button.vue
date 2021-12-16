<template>
  <BButton
    :class="[
      `auth-button-${type}`, 'auth-button',
      {
        'disabled': disabled
      }
    ]"
    :loading="loading"
    :disabled="disabled"
    :type="type"
    @click="handleClick"
  >
    {{disabled ? ` Get ${time}s again` : content}}
  </BButton>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class AuthButton extends Vue {
  @Prop() readonly loading!: boolean
  @Prop() disabled!: boolean
  @Prop() readonly type!: string
  @Prop() readonly content!: string

  time: number = 5
  countTime: any

  handleClick($event: any) {
    if (this.type === 'time') {
      this.disabled = true
      this.countTime = setInterval(()=> {
        this.time--
        if(this.time === -1) {
          this.time = 5
          this.disabled = false
          return clearInterval(this.countTime)
        }
      }, 1000)
    } else {
      this.$emit('click', $event)
    }
  }
}
</script>

<style lang="less">
.auth-button {
  margin-top: 10px;
  margin-bottom: 10px;

  &-submit {
    cursor: pointer;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 4px;
    font-size: 15px;
    color: #fff;
    background: #02c6a3;
    background-image: linear-gradient(262.56deg, #02c6a3, #00ab8c 98.48%);

    &:hover {
      background: #02c6a3;
      background-image: none;
    }
  }

  &-time {
    cursor: pointer;
    font-weight: 500;
    color: #16b979;
    background-color: #fff;
    border: none;
    min-width: 100px;
  }

  &-time:hover {
    color: #16b979;
  }
}

.disabled {
  color: #ccc;
  pointer-events: none;
}
</style>
