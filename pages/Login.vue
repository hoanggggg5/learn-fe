<template>
  <Auth>
    <AuthForm title="Đăng nhập MEXC" @submit.prevent="login" >
      <AuthInput v-model="email" type="email" placeholder="Email" label="Email :" :error="email_error"/>
      <AuthInput v-model="password" type="password" placeholder="Password" label="Password :" :error="password_error"/>
      <AuthButton type="submit" content="Login"/>
      <AuthLinks>
        <nuxt-link to="/forgotPassword">Forget Password</nuxt-link>
        <nuxt-link to="/register">Sign Up</nuxt-link>
      </AuthLinks>
    </AuthForm>
  </Auth>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { AuthMixin } from '@/mixins/auth'

@Component({})
export default class Login extends Mixins(AuthMixin) {
  login() {
    if(this.email_error) return
    if (this.password_error) return
    console.log(this.email, this.password);
  }
}
</script>
