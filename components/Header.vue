<template>
<div class="header">
    <div class="header-nav">
      <BNavList>
        <BNavItem>
          <img src="https://b.peatio.com/logos/b1.svg" alt="" class="header-logo">
        </BNavItem>
        <BNavItem>Markets</BNavItem>
        <BNavItem type="dropdown" :content="contentNavBar[0]">Trade</BNavItem>
        <BNavItem type="dropdown" :content="contentNavBar[0]">Futures</BNavItem>
        <BNavItem type="dropdown" :content="contentNavBar[0]">Earn</BNavItem>
        <BNavItem>Polkadot</BNavItem>
        <BNavItem type="dropdown" :content="contentNavBar[0]">More</BNavItem>
      </BNavList>
      <BNavList>
        <BNavItem><nuxt-link to="/login">Login</nuxt-link></BNavItem>
        <BNavItem><nuxt-link to="/register">Sign in</nuxt-link></BNavItem>
        <BNavItem type="dropdown">English/USD</BNavItem>
      </BNavList>
    </div>
    <div class="header-banner">
        <div class="header-banner-title">
          <div class="header-banner-title-main">
            BigONE Exchange, <br> More Than Just Asset Security.
          </div>
          <div class="header-banner-title-desc">
            BigONE supports you with every cryptocurrency transaction.
          </div>
          <div class="header-banner-title-button">
            <BButton type="click">Join Now</BButton>
            <BButton type="click">Start Trading</BButton>
          </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'nuxt-property-decorator'

@Component({})
export default class Header extends Vue {
  contentNavBar: any[] = [
    {
      title: "Trade",
      listDrop: [
        {
          title: "Spot",
          listDropItem: [
            {
              title: "Spot",
              content: "Convenient & popular spot trading"
            },
            {
              title: "Liquidity Mining",
              content: "Earn income from fees by providing Dual-Assets"
            },
            {
              title: "Swapbox",
              content: "One-Stop DEX Service Aggregated with Multi-chain"
            },
            {
              title: "Leveraged ETF",
              content: "Leveraged ETF Trading triggers liquidation"
            }
          ]
        }
      ]
    }
  ]
}
</script>

<style lang="less">
.header {
  background-image: url(https://b.peatio.com/home/n/hbg.png);
  padding-bottom: 173px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &-logo {
    height: 36px;
  }

  &-nav {
    display: flex;
    justify-content: space-between;
  }

  &-banner {
    margin: auto;
    display: flex;
    justify-content: center;

    &-title {
      width: 1200px;
      color: #fff;
      
      &-main {
        margin-top: 80px;
        font-size: 40px;
        line-height: 60px;
      }

      &-desc {
        margin-top: 24px;
        font-size: 15px;
        font-weight: 400;
        line-height: 28px;
        opacity: .5;
      }

      &-button {
        margin-top: 50px;
        :first-child {
          margin-right: 16px;
        }
      }
    }
  }
}
</style>
