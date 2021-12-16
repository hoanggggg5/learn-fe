<template>
  <div :class="['auth-links', { 'auth-links-1': number === 1 }]">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class AuthLinks extends Vue {
  @Prop({ default: 2 }) readonly number!: number
}
</script>

<style lang="less">
.auth-links {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500px;
  color: #aaa;

  &-1 {
    display: block;
    text-align: center;
  }

  a {
    text-decoration: none;
    font-size: 15px;
    color: #16b979;
  }
}
</style>
