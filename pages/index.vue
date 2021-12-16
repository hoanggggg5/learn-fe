<template>
  <div>
    <Header/>
    <div class="coin">
      <div class="title">Coin List</div>
    </div>
    <Block class="musics">
      <Table
        :columns="columns"
        :data="data"
      />
    </Block>
  </div>  
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { Align, Column } from '@/types'

@Component({})
export default class index extends Vue {
  columns: Column[] = [
    {
      key: 'name',
      title: 'Coin Name',
      align: Align.Left,  
    },
    {
      key: 'price',
      title: 'Last Price',
      align: Align.Left,
    },
    {
      key: 'change',
      title: '24h Change',
      align: Align.Left,
    },
    {
      key: 'markets',
      title: 'Markets',
      align: Align.Right,
    }
  ]

  data: any[] = [
    {
      name: "BTC Bitcoin",
      price: "$ 48564.78",
      change: "+1.85%",
      markets: ""
    },
    {
      name: "BTC Bitcoin",
      price: "$ 48564.78",
      change: "+1.85%",
      markets: ""
    },
    {
      name: "BTC Bitcoin",
      price: "$ 48564.78",
      change: "+1.85%",
      markets: ""
    },
    {
      name: "BTC Bitcoin",
      price: "$ 48564.78",
      change: "+1.85%",
      markets: ""
    }
  ]
}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  .coin {
    margin-top: 70px;
    display: flex;
    justify-content: center;

    .title {
      margin: 0 0 50px;
      color: #111;
      font-size: 42px;
      font-weight: normal;
      line-height: 44px;
      width: 1200px;
    }
  }
</style>
