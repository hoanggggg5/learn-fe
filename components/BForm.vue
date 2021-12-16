<template>
  <div class="auth-form-container">
    <div class="auth-form-title">
      {{ title }}
    </div>
    <form class="auth-form" @submit="event => $emit('submit', event)">
      <slot/>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class BForm extends Vue {
  @Prop() readonly title!: string;

}
</script>
