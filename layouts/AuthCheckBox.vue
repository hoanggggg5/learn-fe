<template>
  <div class="container">
    <label class="main">
        <input type="checkbox" @change="$emit('handleChecked')"/>
        <span class="checkmark"></span>
        <slot name="checkbox-text" />
    </label>
    <span class="main-error">
      <slot name="error" />
      <!-- ahihi -->
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class MyClass extends Vue {}
</script>

<style lang="less">
.main {
  cursor: pointer;
  display: block;
  position: relative;
  margin-top: 24px;
  padding-left: 23px;
  color: #555B63;
  font-size: 14px;

  a {
    text-decoration: none;
    color: #555B63;
    transition: all 0.15s;

    &:hover {
      color: #38c789;
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 2px;
    transition: all 0.3s;

    &::after {
      content: "";
      position: absolute;
      display: none;
      left: 4px;
      top: 2px;
      width: 3px;
      height: 6px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      transition: all 1s;
    }
  }

  &:hover .checkmark {
    border: 1px solid #38c789;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      border: 1px solid #38c789;
      background-color: #38c789;
    }

    &:checked ~ .checkmark::after {
      display: block;
    }
  }

  &-error {
    display: block;
    margin-bottom: 12px;
    height: 18px;
    padding-top: 6px;
    text-align: center;
    font-size: 13px;
    color: #df384e;
  }
}
</style>
