<template>
  <Auth>
    <AuthForm title="Sign Up for MEXC" @submit.prevent="onSubmit">
      <AuthInput v-model="email" type="email" label="Email:" placeholder="Email" :error="e_email"/>
      <AuthInput v-model="password" type="password" label="Password:" placeholder="Password" :error="e_password"/>
      <AuthInput v-model="re_password" type="password" label="Confirm password:" placeholder="Confirm password" :error="e_re_password"/>
      <AuthInput v-model="verificationCode" type="text" label="Verification code:" placeholder="Verification code" :error="errorVerificationCode">
        <template slot="suffix">
          <AuthButton type="time" time="20">
            Get code
          </AuthButton>
        </template>
      </AuthInput>
      <AuthInput v-model="introduceCode" label="Referral code:" type="text" placeholder="Referral code"/>
      <AuthCheckBox @handleChecked="checked = !checked"> 
        <template slot="checkbox-text">
          I have read and agree to the
          <nuxt-link to="">User Agreement and Privacy Policy.</nuxt-link>
        </template>
        <template slot="error">
          {{ errorChecked }}
        </template>
      </AuthCheckBox>
      <AuthButton type="submit">
        Register
      </AuthButton>
      <AuthLinks :number="1">
        Already have an Account.
        <nuxt-link to="/login">Login now</nuxt-link>
      </AuthLinks>
    </AuthForm>
  </Auth>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Register extends Vue {
  email = ''
  password = ''
  rePassword = ''
  verificationCode = ''
  introduceCode = ''
  checked = false;
}
</script>

