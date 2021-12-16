<template>
  <div class="drop-down">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class BInput extends Vue {
  @Prop() readonly value!: string
}
</script>

