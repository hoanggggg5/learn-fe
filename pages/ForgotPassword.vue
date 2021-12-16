<template>
  <Auth>
    <AuthForm v-if="!exist_email" title="Reset login password" @submit.prevent="onSubmit" >
      <AuthInput v-model="email" type="email" label="Reset account :" placeholder="Please enter the account that needs to be reset" :error="email_error"/>
      <AuthButton type="submit" content="Confirm"/>
      <span style="color: #555b63; font-weight: 500;">
        Withdrawal of money is prohibited for 24 hours after resetting the login password.
      </span>
    </AuthForm>
  </Auth>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator"
import { AuthMixin } from "~/mixins/auth";

@Component({})
export default class ForgotPassword extends Mixins(AuthMixin) {
  confirmEmail() {
    if(this.email_error) return
    console.log("error");
  }
}
</script>
