<template>
  <div class="a-table">
    <div class="a-table-head">
      <span
        v-for="col in columns"
        :key="col.key"
        :class="[col.key, col.class, `text-${col.align || 'left'}`]"
      >
        {{ col.title }}
      </span>
    </div>

    <div class="a-table-content">
      <TableRow
        v-for="(row, index) in data"
        :key="index"
      >
        <span
          v-for="col in columns"
          :key="col.key"
          :class="[ col.key, col.class, 'item', `text-${col.align || 'left'}` ]"
        > 
          <slot v-if="col.scopedSlot" :name="col.key" :row="row" :col="col"/>
          <template v-else>{{ row[col.key] }}</template>
        </span>
      </TableRow>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Column } from '~/types'

@Component({})
export default class Table extends Vue {
  @Prop() readonly data!: any[]
  @Prop() readonly columns!: Column[]
  @Prop() readonly isRouterLink!: boolean
  @Prop() readonly routerBuilder!: string
}
</script>

<style lang="less">
.a-table {
  background-color: #fff;
  width: 1200px;

  &-head,
  &-row {
    position: relative;
    display: flex;
    align-items: center;
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;

    > a,
    > span {
      flex: 1;
      padding: 20px;
    }
  }

  &-head {
    font-weight: 400;
    color: #606266;
  }

  &-row {
    text-decoration: none;
    color: #212529;

    .up {
      color: #3dad75;
    }

    .down {
      color: #e16358;
    }
  }

  &-row:hover {
    background-color: #f2f2f2;
    border-bottom: 1px solid #e7e7e7;
    border-top: 1px solid #e7e7e7;
    box-shadow: 0 0 5px 0 rgba(43, 43, 43, 0.1);
  }

  &-content {
    position: relative;
    min-height: 250px;
  }
}

.scroll-height{
  .a-table-content {
    height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
  }
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}
</style>
