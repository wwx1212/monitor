<template>
  <div class="container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="coinName" width="50px">
        <template #default>
          <i class="el-icon-star-off"></i>
        </template>
      </el-table-column>
      <el-table-column type="index" width="50px">
        <template #header>
          <div class="header-sort">
            <img class="el-icon-caret-top" src="../../assets/img/xiangshangjiantou.png">
            <span style="font-weight: bold; font-size: 14px; color: #333">#</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="coin" min-width="300">
        <template #default="{ row }">
          <div style="display: flex;align-items: center;justify-content: space-between;">
            <div style="display: flex;align-items: center;">
              <img v-if="row.log" :src="row.log" alt="" style="width: 16px;height: 16px;margin-right: 6px;">
              <span>{{ row.coinName }}</span>
            </div>
            <div class="coinName-tag">buy</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="price" min-width="180"/>
      <!--    <el-table-column prop="oneHour" label="1h" width="180"/>-->
<!--          <el-table-column prop="tradingVolume" label="24h" width="180"/>-->
<!--          <el-table-column prop="percent" label="7d" min-width="180"/>-->
      <el-table-column prop="tradingVolume" label="24h Volume" min-width="180"/>
      <el-table-column prop="prePriceTwo" label="Market Cap" min-width="180"/>
<!--      <el-table-column prop="percent" label="Last 7 Days" min-width="180"/>-->
    </el-table>
  </div>

</template>

<script>
import { getDataInfo } from '@/views/table/api';

export default {
  data() {
    return {
      tableData: [],
      timer: null
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.getList()
    }, 30000)
    this.getList()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    getList() {
      getDataInfo().then(res => {
        if (res.success) {
          this.tableData = res.data
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  padding: 24px;
  padding-bottom: 60px;
  background: #F6F8F8;
  .header-sort {
    display: flex;
    align-items: center;
  }
  .el-icon-star-off {
    font-size: 16px;
    cursor: pointer;
  }
  .el-icon-caret-top {
    width: 10px;
    color: #333;
    cursor: pointer;
    margin-right:6px;
  }

  .coinName-tag {
    width: 34px;
    height: 18px;
    border: 1px solid rgb(75, 204, 0);
    border-radius: 3px;
    color: rgb(75, 204, 0);
    line-height: 18px;
    text-align: center;
    font-size: 12px;
  }

  :deep .has-gutter {
    .el-table__cell {
      .cell {
        color: #333;
        font-size: 14px;
      }
    }
  }
}


</style>
