<template>
  <div class="auth-form-container">
    <div class="auth-form-title">{{ title }}</div>
    <form class="auth-form" @submit="$emit('submit', $event)">
      <slot />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class AuthForm extends Vue {
  @Prop() readonly title!: string
}
</script>

<style lang="less">
.auth-form {
  margin-top: 24px;
  padding: 24px;
  width: 450px;
  font-size: 14px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);

  &-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  &-title {
    text-align: center;
    font-size: 26px;
    color: #fff;
    text-shadow: 0 0 2px 3px #000;
  }
}
</style>
