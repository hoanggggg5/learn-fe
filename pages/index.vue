<template>
  <div class="container">
    <Header/>
    <div class="coin-list">
      <div class="title">Coin List</div>
    </div>
    <Block class="musics">
      <Table
        :columns="columns"
        :data="data"
      >
        <template slot="coin" slot-scope="{ row, col }">
          <div class="a-table-row-coin">
            <img :src="row[col.key].logo" alt="" class="a-table-row-coin-logo">
            <div class="a-table-row-coin-symbol">{{row[col.key].symbol}}</div>
            <div class="a-table-row-coin-name">{{row[col.key].name}}</div>
          </div>
        </template>
        <template slot="change" slot-scope="{ row, col }">
          <span :class="[`${row[col.key].status}`]">
            {{ row[col.key].status === 'up' ? '+' : '-' }} {{ row[col.key].value }}
          </span>
        </template>
      </Table>
    </Block>
  </div>  
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { Align, Column } from '@/types'
import store from "~/controllers/store"

@Component({})
export default class index extends Vue {

  get user() {
    return store.value.user
  }

  columns: Column[] = [
    {
      key: 'coin',
      scopedSlot: true,
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
      scopedSlot: true,
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
      coin: {
        logo: "https://assets.peatio.com/assets/v1/color/normal/btc.png",
        symbol: "BTC",
        name: "Bitcoin",
      },
      price: "$ 48564.78",
      change: {
        value: "1.85%",
        status: "up"
      },
      markets: ""
    },
    { 
      coin: {
        logo: "https://assets.peatio.com/assets/v1/color/normal/btc.png",
        symbol: "BTC",
        name: "Bitcoin",
      },
      price: "$ 48564.78",
      change: {
        value: "1.85%",
        status: "up"
      },
      markets: ""
    },
    { 
      coin: {
        logo: "https://assets.peatio.com/assets/v1/color/normal/btc.png",
        symbol: "BTC",
        name: "Bitcoin",
      },
      price: "$ 48564.78",
      change: {
        value: "1.85%",
        status: "down"
      },
      markets: ""
    },
    { 
      coin: {
        logo: "https://assets.peatio.com/assets/v1/color/normal/btc.png",
        symbol: "BTC",
        name: "Bitcoin",
      },
      price: "$ 48564.78",
      change: {
        value: "1.85%",
        status: "up"
      },
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
  
  .coin-list {
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
