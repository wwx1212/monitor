<template>
  <div class="container">
    <div class="container-card">
      <div>
        <div class="Trending" style="font-size: 20px;color: rgb(255, 255, 255);margin-bottom: 12px;">Trending</div>
        <div style="display: flex;align-items: center;width: 1100px;">
          <div v-for="(item, index) in list1" :key="index" class="card-main1">
            <div class="mask"></div>
            <div class="text">
              <div class="text-1">{{ item.coinName }}</div>
              <div class="text-2" :style="{ color: item.percentStatus == 1 ? 'red' : '#00ada2' }">
                <span v-if="item.percentStatus == 1" style="color: red">-</span>
                <span v-else style="color: #00ada2;">+</span>
                {{ item.percent }}
              </div>
              <div class="text-3">{{ item.price }}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="Trending" style="font-size: 20px;color: rgb(255, 255, 255);margin-bottom: 0px; margin-top: 16px;">Top Gainers</div>
        <div style="display: flex;align-items: center;width: 1100px;">
          <div v-for="(item, index) in list2" :key="index" class="card-main2">
            <div class="mask"></div>
            <div class="text">
              <div class="text-1">{{ item.coinName }}</div>
              <div class="text-2" :style="{ color: item.percentStatus == 1 ? 'red' : '#00ada2' }">
                <span v-if="item.percentStatus == 1" style="color: red">-</span>
                <span v-else style="color: #00ada2">+</span>
                {{ item.percent }}
              </div>
              <div class="text-3">{{ item.price }}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <el-table :data="tableData" style="width: 100%" size="medium">
      <el-table-column prop="coinName" width="50px">
        <template #default>
          <i class="el-icon-star-off"></i>
        </template>
      </el-table-column>
      <el-table-column type="index" width="50px">
        <template #header>
          <div class="header-sort">
            <img class="el-icon-caret-top" src="../../assets/img/xiangshangjiantou.png" />
            <span style="font-weight: bold; font-size: 14px; color: #333">#</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="coin" min-width="200">
        <template #default="{ row }">
          <div style="display: flex;align-items: center;justify-content: space-between;">
            <div style="display: flex;align-items: center;">
              <img v-if="row.image" :src="row.image" alt="" style="width: 16px;height: 16px;margin-right: 6px;" />
              <span>{{ row.coinName }}</span>
            </div>
            <!--            <div class="coinName-tag">buy</div>-->
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="price" min-width="180" />
      <!--    <el-table-column prop="oneHour" label="1h" width="180"/>-->
      <!--          <el-table-column prop="tradingVolume" label="24h" width="180"/>-->
      <el-table-column label="7d" min-width="180">
        <template #default="{ row }">
          <div style="display: flex;align-items: center">
            <img v-if="row.percentStatus == 0" style="width: 11px;margin-right: 4px" src="../../assets/img/xiangxia.png" alt="" />
            <img v-if="row.percentStatus == 1" style="width: 11px;margin-right: 4px" src="../../assets/img/xiangshang.png" alt="" />
            <span :style="{ color: row.percentStatus == 0 ? 'red' : '#00ada2' }">{{ row.percent }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="tradingVolume" label="24h Volume" min-width="180" />
      <el-table-column prop="prePriceTwo" label="Market Cap" min-width="180" />
      <!--      <el-table-column prop="percent" label="Last 7 Days" min-width="180"/>-->
    </el-table>
  </div>

</template>

<script>
import { getDataInfo, dataHot, dataTop } from '@/views/table/api'

export default {
  data() {
    return {
      tableData: [],
      timer: null,
      list1: [],
      list2: []
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.getList()
    }, 30000)
    this.getList()
    this.getData()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    getList() {
      getDataInfo().then(res => {
        if (res.success) {
          this.tableData = JSON.parse(JSON.stringify(res.data))
        }
      })
    },
    getData() {
      dataHot().then(res => {
        if (res.success) {
          const data = res.data
          this.list1 = data
          this.$nextTick(() => {
            const cards1 = document.querySelectorAll('.card-main1')
            cards1.forEach((item, i) => {
              item.style.background = `url(${this.list1[i].log}) center/cover no-repeat`
            })
          })
        }
      })
      dataTop().then(res => {
        if (res.success) {
          const data = res.data
          this.list2 = data
          this.$nextTick(() => {
            const cards2 = document.querySelectorAll('.card-main2')
            cards2.forEach((item, i) => {
              item.style.background = `url(${this.list2[i].log}) center/cover no-repeat`
            })
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  padding: 24px 24px 60px;
  min-height: 100vh;
  background: #000;
  .container-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    //display: grid;
    //justify-content: space-between;
    //grid-template-columns: 19% 19% 19% 19% 19%;
    margin-bottom: 20px;
    padding: 24px 24px;

    .card-main1 {
      overflow: hidden;
    }

    .card-main2 {
      //background: url('https://assets.coingecko.com/coins/images/50993/standard/Screenshot_2024-10-22_at_2.46.54%E2%80%AFAM.png?1729672855') center/cover no-repeat;
      overflow: hidden;
      margin-top: 12px;
    }

    .card-main1, .card-main2 {
      position: relative;
      width: 100%;
      height: 130px;
      border-radius: 12px;
      border: 1px solid #b2b1b1;
      margin-right: 12px;
      .mask {
        position: absolute;
        z-index: 1;
        flex: 1;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        border: 1rpx solid rgba(189, 189, 189, 0.9);
        backdrop-filter: blur(3px); /* 毛玻璃模糊程度 */
        -webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影 */
      }
        .text {
          padding: 20px;
          box-sizing: border-box;
          position: absolute;
          z-index: 2;
          color: rgb(255, 255, 255);
          .text-1 {
            font-size: 18px;
          }
          .text-2 {
            font-weight: bold;
            font-size: 21px;
            margin-top: 16px;
          }
          .text-3 {
            font-size: 13px;
            margin-top: 16px;
            color: #ababab;
          }
        }
    }
  }
//
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
    color: #000;
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
        color: #000;
        font-size: 14px;
      }
    }
  }
}

</style>
