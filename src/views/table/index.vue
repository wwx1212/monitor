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
            <img class="el-icon-caret-top" src="../../assets/img/xiangshangjiantou.png" />
            <span style="font-weight: bold; font-size: 14px; color: #333">#</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="coin" min-width="300">
        <template #default="{ row }">
          <div style="display: flex;align-items: center;justify-content: space-between;">
            <div style="display: flex;align-items: center;">
              <img v-if="row.image" :src="row.image" alt="" style="width: 16px;height: 16px;margin-right: 6px;" />
              <span>{{ row.coinName }}</span>
            </div>
            <div class="coinName-tag">buy</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="price" min-width="180" />
      <!--    <el-table-column prop="oneHour" label="1h" width="180"/>-->
      <!--          <el-table-column prop="tradingVolume" label="24h" width="180"/>-->
      <!--          <el-table-column prop="percent" label="7d" min-width="180"/>-->
      <el-table-column prop="tradingVolume" label="24h Volume" min-width="180" />
      <el-table-column prop="prePriceTwo" label="Market Cap" min-width="180" />
      <!--      <el-table-column prop="percent" label="Last 7 Days" min-width="180"/>-->
    </el-table>
  </div>

</template>

<script>
import { getDataInfo } from '@/views/table/api'

export default {
  data() {
    return {
      tableData: [
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=ai16z',
          'image': 'https://assets.coingecko.com/coins/images/51090/standard/AI16Z.jpg?1730027175',
          'coinName': 'ai16z',
          'price': '$0.6026',
          'percent': '7.5%',
          'prePrice': '$660,586,397',
          'prePriceTwo': '$660,586,397',
          'tradingVolume': '$36,911,119',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Fartcoin',
          'image': 'https://assets.coingecko.com/coins/images/50891/standard/fart.jpg?1729503972',
          'coinName': 'Fartcoin',
          'price': '$0.6830',
          'percent': '11.8%',
          'prePrice': '$679,456,175',
          'prePriceTwo': '$679,456,175',
          'tradingVolume': '$132,976,276',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Grass',
          'image': 'https://assets.coingecko.com/coins/images/40094/standard/Grass.jpg?1725697048',
          'coinName': 'Grass',
          'price': '$2.48',
          'percent': '6.9%',
          'prePrice': '$604,156,846',
          'prePriceTwo': '$2,477,016,137',
          'tradingVolume': '$116,390,776',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Goatseus Maximus',
          'image': 'https://assets.coingecko.com/coins/images/50717/standard/GOAT_LOGO_NEW.jpg?1731292759',
          'coinName': 'Goatseus Maximus',
          'price': '$0.5086',
          'percent': '2.1%',
          'prePrice': '$507,523,278',
          'prePriceTwo': '$507,523,278',
          'tradingVolume': '$208,465,611',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=io.net',
          'image': 'https://assets.coingecko.com/coins/images/37754/standard/io_blackbg.png?1715446363',
          'coinName': 'io.net',
          'price': '$2.90',
          'percent': '2.7%',
          'prePrice': '$364,605,669',
          'prePriceTwo': '$2,321,743,404',
          'tradingVolume': '$154,468,463',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Act I The AI Prophecy',
          'image': 'https://assets.coingecko.com/coins/images/50984/standard/ai_prophecy.jpg?1729653897',
          'coinName': 'Act I The AI Prophecy',
          'price': '$0.3248',
          'percent': '3.3%',
          'prePrice': '$307,856,685',
          'prePriceTwo': '$307,856,685',
          'tradingVolume': '$174,216,112',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Zerebro',
          'image': 'https://assets.coingecko.com/coins/images/51289/standard/zerebro_2.png?1730588883',
          'coinName': 'Zerebro',
          'price': '$0.3189',
          'percent': '9.1%',
          'prePrice': '$320,043,192',
          'prePriceTwo': '$320,043,192',
          'tradingVolume': '$67,743,235',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Nosana',
          'image': 'https://assets.coingecko.com/coins/images/22553/standard/POfb_I4u_400x400.jpg?1696521873',
          'coinName': 'Nosana',
          'price': '$2.70',
          'percent': '0.8%',
          'prePrice': '$225,341,953',
          'prePriceTwo': '$270,194,188',
          'tradingVolume': '$2,405,038',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=GRIFFAIN',
          'image': 'https://assets.coingecko.com/coins/images/52547/standard/aAp7HijF4Uf1SkZO3FsVMyrbBc5kux_0vIlI7Amxiu7ygza2T_Swtp8bA2KoL_yU0YWw7c52LG9wflD7b5KMZ6GNJgDtgQfmMKy75SBQ5ldIHl6qffC9SNWqKyvqKQJ5sWZgJnXztPPsuJD_IVTTdPlabPlxxuNq7OAxQcjCbRxnge3tim3QyyIrc5vTOzWR93BoZVf0pd7EzwziVlhzov.jpg?1733590142',
          'coinName': 'GRIFFAIN',
          'price': '$0.2024',
          'percent': '4.8%',
          'prePrice': '$203,288,315',
          'prePriceTwo': '$203,288,315',
          'tradingVolume': '$31,814,875',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=TARS AI',
          'image': 'https://assets.coingecko.com/coins/images/37538/standard/Tars_AI_200_x_200.png?1719524065',
          'coinName': 'TARS AI',
          'price': '$0.3428',
          'percent': '2.7%',
          'prePrice': '$200,873,505',
          'prePriceTwo': '$306,437,241',
          'tradingVolume': '$39,620,372',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=AI Rig Complex',
          'image': 'https://assets.coingecko.com/coins/images/52701/standard/u312bPNA_400x400.jpg?1734044765',
          'coinName': 'AI Rig Complex',
          'price': '$0.1169',
          'percent': '23.3%',
          'prePrice': '$115,586,460',
          'prePriceTwo': '$115,586,460',
          'tradingVolume': '$47,411,814',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Eliza',
          'image': 'https://assets.coingecko.com/coins/images/51825/standard/eliza.jpg?1732037151',
          'coinName': 'Eliza',
          'price': '$0.04321',
          'percent': '11.2%',
          'prePrice': '$43,306,007',
          'prePriceTwo': '$43,306,007',
          'tradingVolume': '$9,903,187',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Alchemist AI',
          'image': 'https://assets.coingecko.com/coins/images/52302/standard/small-logo.png?1733053544',
          'coinName': 'Alchemist AI',
          'price': '$0.05701',
          'percent': '62.1%',
          'prePrice': '$48,377,607',
          'prePriceTwo': '$56,914,531',
          'tradingVolume': '$61,604,744',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Memes AI',
          'image': 'https://assets.coingecko.com/coins/images/51223/standard/IMG_3437.png?1730353319',
          'coinName': 'Memes AI',
          'price': '$0.04651',
          'percent': '0.8%',
          'prePrice': '$46,345,885',
          'prePriceTwo': '$46,345,885',
          'tradingVolume': '$3,942,550',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Degen Spartan AI',
          'image': 'https://assets.coingecko.com/coins/images/51254/standard/degenai.jpg?1730560647',
          'coinName': 'Degen Spartan AI',
          'price': '$0.04184',
          'percent': '12.8%',
          'prePrice': '$41,936,645',
          'prePriceTwo': '$41,936,645',
          'tradingVolume': '$2,548,235',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Dasha',
          'image': 'https://assets.coingecko.com/coins/images/51306/standard/ogvvaifu.png?1730615734',
          'coinName': 'Dasha',
          'price': '$0.04245',
          'percent': '6.8%',
          'prePrice': '$42,345,988',
          'prePriceTwo': '$42,345,988',
          'tradingVolume': '$3,514,508',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Dolos The Bully',
          'image': 'https://assets.coingecko.com/coins/images/51622/standard/dolos_200.jpg?1731659298',
          'coinName': 'Dolos The Bully',
          'price': '$0.04939',
          'percent': '23.0%',
          'prePrice': '$47,294,036',
          'prePriceTwo': '$47,294,036',
          'tradingVolume': '$17,211,742',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=KWEEN',
          'image': 'https://assets.coingecko.com/coins/images/52772/standard/photo_2024-12-08_15-26-24.jpg?1734278967',
          'coinName': 'KWEEN',
          'price': '$0.03219',
          'percent': '3.1%',
          'prePrice': '$32,186,648',
          'prePriceTwo': '$32,186,648',
          'tradingVolume': '$324,951',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=ORBIT',
          'image': 'https://assets.coingecko.com/coins/images/52598/standard/4.png?1733741120',
          'coinName': 'ORBIT',
          'price': '$0.02382',
          'percent': '0.4%',
          'prePrice': '$21,002,220',
          'prePriceTwo': '$23,866,167',
          'tradingVolume': '$4,533,286',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=FXN',
          'image': 'https://assets.coingecko.com/coins/images/52244/standard/FXN_Chrome-Full.png?1732817709',
          'coinName': 'FXN',
          'price': '$0.04869',
          'percent': '2.0%',
          'prePrice': '$43,866,806',
          'prePriceTwo': '$48,740,933',
          'tradingVolume': '$4,227,112',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Top Hat',
          'image': 'https://assets.coingecko.com/coins/images/51280/standard/111.jpg?1730483746',
          'coinName': 'Top Hat',
          'price': '$0.02413',
          'percent': '17.9%',
          'prePrice': '$23,766,139',
          'prePriceTwo': '$23,766,139',
          'tradingVolume': '$885,000',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Shoggoth',
          'image': 'https://assets.coingecko.com/coins/images/50982/standard/shoggoth.jpg?1729652318',
          'coinName': 'Shoggoth',
          'price': '$0.04258',
          'percent': '18.3%',
          'prePrice': '$42,532,139',
          'prePriceTwo': '$42,532,139',
          'tradingVolume': '$11,092,073',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=AgentTank',
          'image': 'https://assets.coingecko.com/coins/images/52616/standard/simple-logo1-pixel-800x800.png?1733776101',
          'coinName': 'AgentTank',
          'price': '$0.01203',
          'percent': '25.2%',
          'prePrice': '$12,041,825',
          'prePriceTwo': '$12,041,825',
          'tradingVolume': '$7,192,448',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Deep Worm',
          'image': 'https://assets.coingecko.com/coins/images/51070/standard/wormlogo.png?1729962178',
          'coinName': 'Deep Worm',
          'price': '$0.01463',
          'percent': '2.8%',
          'prePrice': '$14,419,500',
          'prePriceTwo': '$14,419,500',
          'tradingVolume': '$2,135,145',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Big Pharmai',
          'image': 'https://assets.coingecko.com/coins/images/52800/standard/drugs.jpg?1734335862',
          'coinName': 'Big Pharmai',
          'price': '$0.03682',
          'percent': '147.1%',
          'prePrice': '$42,225,821',
          'prePriceTwo': '$42,225,821',
          'tradingVolume': '$11,713,431',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=BONGO CAT',
          'image': 'https://assets.coingecko.com/coins/images/34342/standard/bongocat_logo.jpg?1728501612',
          'coinName': 'BONGO CAT',
          'price': '$0.01931',
          'percent': '8.0%',
          'prePrice': '$19,363,125',
          'prePriceTwo': '$19,363,125',
          'tradingVolume': '$766,091',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Numogram',
          'image': 'https://assets.coingecko.com/coins/images/50869/standard/gnon.jpg?1733119958',
          'coinName': 'Numogram',
          'price': '$0.05134',
          'percent': '3.5%',
          'prePrice': '$50,300,439',
          'prePriceTwo': '$50,300,439',
          'tradingVolume': '$16,136,130',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Ava AI',
          'image': 'https://assets.coingecko.com/coins/images/51935/standard/7VZQ0qhB_400x400_%282%29.jpg?1732206907',
          'coinName': 'Ava AI',
          'price': '$0.01728',
          'percent': '29.2%',
          'prePrice': '$17,290,382',
          'prePriceTwo': '$17,290,382',
          'tradingVolume': '$11,106,453',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Opus',
          'image': 'https://assets.coingecko.com/coins/images/51585/standard/R7liziZJ_400x400.jpg?1731568879',
          'coinName': 'Opus',
          'price': '$0.01221',
          'percent': '11.3%',
          'prePrice': '$12,202,188',
          'prePriceTwo': '$12,202,188',
          'tradingVolume': '$7,053,698',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=OBOT',
          'image': 'https://assets.coingecko.com/coins/images/51592/standard/obot_coiun_logo.png?1731574696',
          'coinName': 'OBOT',
          'price': '$0.02699',
          'percent': '4.6%',
          'prePrice': '$19,795,473',
          'prePriceTwo': '$19,795,473',
          'tradingVolume': '$2,093,415',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Project89',
          'image': 'https://assets.coingecko.com/coins/images/51057/standard/MXoOa5MC_400x400.jpg?1729876204',
          'coinName': 'Project89',
          'price': '$0.01417',
          'percent': '7.5%',
          'prePrice': '$14,171,846',
          'prePriceTwo': '$14,171,846',
          'tradingVolume': '$1,064,707',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=chaos and disorder',
          'image': 'https://assets.coingecko.com/coins/images/51072/standard/shitverse.png?1729966201',
          'coinName': 'chaos and disorder',
          'price': '$0.006651',
          'percent': '13.6%',
          'prePrice': '$6,684,722',
          'prePriceTwo': '$6,684,722',
          'tradingVolume': '$1,160,346',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=MEOW',
          'image': 'https://assets.coingecko.com/coins/images/38796/standard/MEOW.png?1718897555',
          'coinName': 'MEOW',
          'price': '$0.002025',
          'percent': '2.5%',
          'prePrice': '$181,841,645',
          'prePriceTwo': '$181,841,645',
          'tradingVolume': '$61,179.76',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=KOALA AI',
          'image': 'https://assets.coingecko.com/coins/images/36342/standard/KOKO_PFP_Square_V1a.png?1725022674',
          'coinName': 'KOALA AI',
          'price': '$0.051736',
          'percent': '2.5%',
          'prePrice': '$16,361,246',
          'prePriceTwo': '$17,279,308',
          'tradingVolume': '$147,217',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Kitten Haimer',
          'image': 'https://assets.coingecko.com/coins/images/35900/standard/LOGO_200.jpg?1710165599',
          'coinName': 'Kitten Haimer',
          'price': '$0.2278',
          'percent': '4.2%',
          'prePrice': '$12,288,722',
          'prePriceTwo': '$12,288,722',
          'tradingVolume': '$1,030,197',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=pippin',
          'image': 'https://assets.coingecko.com/coins/images/51589/standard/pippin_logo.png?1731570163',
          'coinName': 'pippin',
          'price': '$0.009147',
          'percent': '10.3%',
          'prePrice': '$9,145,971',
          'prePriceTwo': '$9,145,971',
          'tradingVolume': '$3,644,331',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=MAX',
          'image': 'https://assets.coingecko.com/coins/images/52378/standard/btc.png?1733257730',
          'coinName': 'MAX',
          'price': '$0.01135',
          'percent': '1.4%',
          'prePrice': '$11,355,794',
          'prePriceTwo': '$11,355,794',
          'tradingVolume': '$1,460,982',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Aimonica Brands',
          'image': 'https://assets.coingecko.com/coins/images/52526/standard/PFP_%281%29.png?1733558435',
          'coinName': 'Aimonica Brands',
          'price': '$0.02452',
          'percent': '10.6%',
          'prePrice': '$24,658,782',
          'prePriceTwo': '$24,658,782',
          'tradingVolume': '$4,197,283',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Autonomous Virtual Beings',
          'image': 'https://assets.coingecko.com/coins/images/51295/standard/logo_hd.webp?1730599885',
          'coinName': 'Autonomous Virtual Beings',
          'price': '$0.007506',
          'percent': '4.7%',
          'prePrice': '$7,491,531',
          'prePriceTwo': '$7,491,531',
          'tradingVolume': '$963,179',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=FOREST',
          'image': 'https://assets.coingecko.com/coins/images/50993/standard/Screenshot_2024-10-22_at_2.46.54%E2%80%AFAM.png?1729672855',
          'coinName': 'FOREST',
          'price': '$0.01137',
          'percent': '45.5%',
          'prePrice': '$11,301,684',
          'prePriceTwo': '$11,301,684',
          'tradingVolume': '$1,010,586',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Solaris AI',
          'image': 'https://assets.coingecko.com/coins/images/51351/standard/200x200-v2.png?1732271356',
          'coinName': 'Solaris AI',
          'price': '$0.005345',
          'percent': '41.7%',
          'prePrice': '$5,354,729',
          'prePriceTwo': '$5,354,729',
          'tradingVolume': '$1,333,696',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Synesis One',
          'image': 'https://assets.coingecko.com/coins/images/23289/standard/S_LOGO_2.png?1717239404',
          'coinName': 'Synesis One',
          'price': '$0.02032',
          'percent': '2.2%',
          'prePrice': '$12,323,316',
          'prePriceTwo': '$20,244,921',
          'tradingVolume': '$1,564,950',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=MOE',
          'image': 'https://assets.coingecko.com/coins/images/52269/standard/MOE.png?1732870386',
          'coinName': 'MOE',
          'price': '$0.008057',
          'percent': '2.1%',
          'prePrice': '$7,656,893',
          'prePriceTwo': '$7,656,893',
          'tradingVolume': '$75,992.00',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Universal Basic Compute',
          'image': 'https://assets.coingecko.com/coins/images/52130/standard/UBC_icon_main.jpeg?1732676788',
          'coinName': 'Universal Basic Compute',
          'price': '$0.005172',
          'percent': '4.7%',
          'prePrice': '$5,135,347',
          'prePriceTwo': '$5,145,423',
          'tradingVolume': '$2,779,196',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Mizuki',
          'image': 'https://assets.coingecko.com/coins/images/52735/standard/ZD4kTsGT_400x400.jpg?1734105251',
          'coinName': 'Mizuki',
          'price': '$0.005208',
          'percent': '1.1%',
          'prePrice': '$5,189,073',
          'prePriceTwo': '$5,189,073',
          'tradingVolume': '$920,732',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Naitzsche',
          'image': 'https://assets.coingecko.com/coins/images/52676/standard/ai_%283%29.png?1734021027',
          'coinName': 'Naitzsche',
          'price': '$0.006341',
          'percent': '11.5%',
          'prePrice': '$6,340,138',
          'prePriceTwo': '$6,340,138',
          'tradingVolume': '$998,377',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Slopfather',
          'image': 'https://assets.coingecko.com/coins/images/52155/standard/WTiAe1x9_400x400.jpg?1732668432',
          'coinName': 'Slopfather',
          'price': '$0.005514',
          'percent': '2.9%',
          'prePrice': '$5,513,893',
          'prePriceTwo': '$5,513,893',
          'tradingVolume': '$927,121',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=The Lokie Cabal',
          'image': 'https://assets.coingecko.com/coins/images/52338/standard/IMAGE_2024-11-25_19_40_20.jpg?1733124883',
          'coinName': 'The Lokie Cabal',
          'price': '$0.006643',
          'percent': '1.1%',
          'prePrice': '$6,584,783',
          'prePriceTwo': '$6,584,783',
          'tradingVolume': '$8,579.00',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Tensor',
          'image': 'https://assets.coingecko.com/coins/images/35972/standard/tnsr.png?1712687367',
          'coinName': 'Tensor',
          'price': '$0.4578',
          'percent': '1.3%',
          'prePrice': '$57,229,591',
          'prePriceTwo': '$457,836,725',
          'tradingVolume': '$19,736,919',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=AROK.VC',
          'image': 'https://assets.coingecko.com/coins/images/52727/standard/Frame_2_%282%29.png?1734101351',
          'coinName': 'AROK.VC',
          'price': '$0.005837',
          'percent': '16.0%',
          'prePrice': '$5,836,802',
          'prePriceTwo': '$5,836,802',
          'tradingVolume': '$20,964.12',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Aiwithdaddyissues',
          'image': 'https://assets.coingecko.com/coins/images/50958/standard/shegen.jpg?1729588520',
          'coinName': 'Aiwithdaddyissues',
          'price': '$0.003699',
          'percent': '16.8%',
          'prePrice': '$3,680,380',
          'prePriceTwo': '$3,680,380',
          'tradingVolume': '$643,514',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Bloomsperg Terminal',
          'image': 'https://assets.coingecko.com/coins/images/51448/standard/web-app-manifest-512x512.png?1731305523',
          'coinName': 'Bloomsperg Terminal',
          'price': '$0.006424',
          'percent': '7.5%',
          'prePrice': '$6,401,048',
          'prePriceTwo': '$6,401,048',
          'tradingVolume': '$75,257.86',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Omega',
          'image': 'https://assets.coingecko.com/coins/images/51212/standard/IMG_3469.jpeg?1730352582',
          'coinName': 'Omega',
          'price': '$0.007283',
          'percent': '28.7%',
          'prePrice': '$7,288,962',
          'prePriceTwo': '$7,288,962',
          'tradingVolume': '$256,800',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Thales AI',
          'image': 'https://assets.coingecko.com/coins/images/52645/standard/2024-12-09_21.04.29.jpg?1733873538',
          'coinName': 'Thales AI',
          'price': '$0.005345',
          'percent': '22.9%',
          'prePrice': '$5,327,508',
          'prePriceTwo': '$5,327,508',
          'tradingVolume': '$493,161',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=KEKE Terminal',
          'image': 'https://assets.coingecko.com/coins/images/52064/standard/IMG_3827.webp?1732849613',
          'coinName': 'KEKE Terminal',
          'price': '$0.006642',
          'percent': '13.5%',
          'prePrice': '$6,646,883',
          'prePriceTwo': '$6,646,883',
          'tradingVolume': '$60,962.25',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=$horny',
          'image': 'https://assets.coingecko.com/coins/images/52136/standard/header.webp?1732640454',
          'coinName': '$horny',
          'price': '$0.002319',
          'percent': '26.7%',
          'prePrice': '$2,313,324',
          'prePriceTwo': '$2,313,324',
          'tradingVolume': '$262,416',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Quasar',
          'image': 'https://assets.coingecko.com/coins/images/51820/standard/WhatsApp_G%C3%B6rsel_2024-11-18_saat_17.28.48_60f50509.jpg?1732034963',
          'coinName': 'Quasar',
          'price': '$0.003414',
          'percent': '1.6%',
          'prePrice': '$3,453,453',
          'prePriceTwo': '$3,453,453',
          'tradingVolume': '$139,112',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Ropirito',
          'image': 'https://assets.coingecko.com/coins/images/51793/standard/replicate-prediction-a5k9rv088srga0ck1tmv757wk0.png?1731987041',
          'coinName': 'Ropirito',
          'price': '$0.003581',
          'percent': '4.6%',
          'prePrice': '$3,566,111',
          'prePriceTwo': '$3,566,111',
          'tradingVolume': '$161,761',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Kolin',
          'image': 'https://assets.coingecko.com/coins/images/51426/standard/coingecko.png?1733284747',
          'coinName': 'Kolin',
          'price': '$0.005148',
          'percent': '19.1%',
          'prePrice': '$4,818,781',
          'prePriceTwo': '$4,818,781',
          'tradingVolume': '$311,613',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=kwantxbt',
          'image': 'https://assets.coingecko.com/coins/images/52635/standard/19d7csfd_400x400.jpg?1733853472',
          'coinName': 'kwantxbt',
          'price': '$0.001328',
          'percent': '18.2%',
          'prePrice': '$1,231,514',
          'prePriceTwo': '$1,317,061',
          'tradingVolume': '$249,120',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Dither',
          'image': 'https://assets.coingecko.com/coins/images/35415/standard/dithering.png?1708506777',
          'coinName': 'Dither',
          'price': '$0.03383',
          'percent': '15.0%',
          'prePrice': '$3,376,795',
          'prePriceTwo': '$3,376,795',
          'tradingVolume': '$169,989',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Duck AI',
          'image': 'https://assets.coingecko.com/coins/images/51071/standard/Transparent_BG.png?1729963290',
          'coinName': 'Duck AI',
          'price': '$0.004168',
          'percent': '14.9%',
          'prePrice': '$4,151,048',
          'prePriceTwo': '$4,151,048',
          'tradingVolume': '$196,425',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Centience',
          'image': 'https://assets.coingecko.com/coins/images/51732/standard/SomewhereSystems_icon02-final.png?1731915847',
          'coinName': 'Centience',
          'price': '$0.005560',
          'percent': '28.0%',
          'prePrice': '$5,540,315',
          'prePriceTwo': '$5,540,315',
          'tradingVolume': '$4,173,530',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=IQ6900',
          'image': 'https://assets.coingecko.com/coins/images/51777/standard/iconicon.png?1731940187',
          'coinName': 'IQ6900',
          'price': '$0.003002',
          'percent': '17.6%',
          'prePrice': '$3,025,761',
          'prePriceTwo': '$3,025,761',
          'tradingVolume': '$642,502',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=darksun',
          'image': 'https://assets.coingecko.com/coins/images/52571/standard/dark_sun_v3.jpeg?1733690907',
          'coinName': 'darksun',
          'price': '$0.001930',
          'percent': '20.4%',
          'prePrice': '$1,821,295',
          'prePriceTwo': '$1,821,295',
          'tradingVolume': '$307,299',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Weird Medieval Memes',
          'image': 'https://assets.coingecko.com/coins/images/51022/standard/wmm-icon-small.png?1732967410',
          'coinName': 'Weird Medieval Memes',
          'price': '$0.003885',
          'percent': '5.0%',
          'prePrice': '$3,882,634',
          'prePriceTwo': '$3,882,634',
          'tradingVolume': '$609,428',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=YouSim',
          'image': 'https://assets.coingecko.com/coins/images/51495/standard/TiiSj8R3_400x400.jpg?1731407759',
          'coinName': 'YouSim',
          'price': '$0.003940',
          'percent': '20.0%',
          'prePrice': '$3,929,672',
          'prePriceTwo': '$3,929,672',
          'tradingVolume': '$130,715',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=SENSUS',
          'image': 'https://assets.coingecko.com/coins/images/52232/standard/logo.jpg?1733732184',
          'coinName': 'SENSUS',
          'price': '$0.003987',
          'percent': '22.2%',
          'prePrice': '$3,779,465',
          'prePriceTwo': '$3,779,465',
          'tradingVolume': '$365,628',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=OCADA.AI',
          'image': 'https://assets.coingecko.com/coins/images/40079/standard/ocada.png?1725514542',
          'coinName': 'OCADA.AI',
          'price': '$0.06300',
          'percent': '5.6%',
          'prePrice': '$3,514,069',
          'prePriceTwo': '$7,336,852',
          'tradingVolume': '$55,794.19',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Singularry',
          'image': 'https://assets.coingecko.com/coins/images/52290/standard/Bildschirmfoto_2024-11-29_um_10.23.16.png?1732962869',
          'coinName': 'Singularry',
          'price': '$0.003861',
          'percent': '6.6%',
          'prePrice': '$3,843,636',
          'prePriceTwo': '$3,843,636',
          'tradingVolume': '$232,539',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Patchwork Naval',
          'image': 'https://assets.coingecko.com/coins/images/51647/standard/200_x_200_New_Face_Dec_8_glowing_eyes.png?1733763794',
          'coinName': 'Patchwork Naval',
          'price': '$0.003044',
          'percent': '3.7%',
          'prePrice': '$2,974,796',
          'prePriceTwo': '$2,974,796',
          'tradingVolume': '$70,767.39',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=KIRA',
          'image': 'https://assets.coingecko.com/coins/images/36263/standard/KIRA.jpg?1710945185',
          'coinName': 'KIRA',
          'price': '$0.08778',
          'percent': '11.4%',
          'prePrice': '$3,325,916',
          'prePriceTwo': '$12,677.23',
          'tradingVolume': null,
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=KiraKuru',
          'image': 'https://assets.coingecko.com/coins/images/52710/standard/Kira_Kuru_Original.png?1734059282',
          'coinName': 'KiraKuru',
          'price': '$0.005131',
          'percent': '17.4%',
          'prePrice': '$5,114,522',
          'prePriceTwo': '$5,114,522',
          'tradingVolume': '$202,269',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=BROT',
          'image': 'https://assets.coingecko.com/coins/images/52427/standard/blockrot_pfp_square.png?1733331205',
          'coinName': 'BROT',
          'price': '$0.001161',
          'percent': '22.4%',
          'prePrice': '$1,158,690',
          'prePriceTwo': '$1,158,690',
          'tradingVolume': '$38,512.93',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Effective accelerationism',
          'image': 'https://assets.coingecko.com/coins/images/50905/standard/GqmEdRD3zGUZdYPeuDeXxCc8Cj1DBmGSYK97TCwSpump.webp?1729520765',
          'coinName': 'Effective accelerationism',
          'price': '$0.003698',
          'percent': '20.0%',
          'prePrice': '$3,648,894',
          'prePriceTwo': '$3,648,894',
          'tradingVolume': '$437,121',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Cheshire Grin',
          'image': 'https://assets.coingecko.com/coins/images/52157/standard/5039705898209095056.jpg?1732674873',
          'coinName': 'Cheshire Grin',
          'price': '$0.002066',
          'percent': '25.5%',
          'prePrice': '$2,066,205',
          'prePriceTwo': '$2,066,205',
          'tradingVolume': '$796,742',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=LIMBO',
          'image': 'https://assets.coingecko.com/coins/images/52251/standard/8eNL08VM_400x400.jpg?1732833533',
          'coinName': 'LIMBO',
          'price': '$0.002056',
          'percent': '7.2%',
          'prePrice': '$2,053,452',
          'prePriceTwo': '$2,053,452',
          'tradingVolume': '$319,087',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=SIZE',
          'image': 'https://assets.coingecko.com/coins/images/33971/standard/SIZE.png?1703577079',
          'coinName': 'SIZE',
          'price': '$0.002342',
          'percent': '7.1%',
          'prePrice': '$2,272,067',
          'prePriceTwo': '$2,272,067',
          'tradingVolume': '$12,181.22',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Neroboss',
          'image': 'https://assets.coingecko.com/coins/images/52270/standard/QmdkvuomDBrYFoUdGQVnsS2rqALPUiGbmVMim6hSGfqnWX.jpeg?1732870947',
          'coinName': 'Neroboss',
          'price': '$0.001859',
          'percent': '25.0%',
          'prePrice': '$1,851,146',
          'prePriceTwo': '$1,851,146',
          'tradingVolume': '$339,263',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=GMika',
          'image': 'https://assets.coingecko.com/coins/images/50773/standard/Untitled_design_%287%29.png?1729134360',
          'coinName': 'GMika',
          'price': '$0.001829',
          'percent': '5.9%',
          'prePrice': '$1,828,520',
          'prePriceTwo': '$1,828,520',
          'tradingVolume': '$77,419.23',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=KIRA',
          'image': 'https://assets.coingecko.com/coins/images/51279/standard/KIRA.png?1730483434',
          'coinName': 'KIRA',
          'price': '$0.001408',
          'percent': '9.7%',
          'prePrice': '$1,404,931',
          'prePriceTwo': '$1,404,931',
          'tradingVolume': '$95,376.26',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Convo',
          'image': 'https://assets.coingecko.com/coins/images/52577/standard/Shared_Image.png?1733692692',
          'coinName': 'Convo',
          'price': '$0.001473',
          'percent': '7.7%',
          'prePrice': '$1,466,578',
          'prePriceTwo': '$1,466,578',
          'tradingVolume': '$200,255',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=sqrFUND',
          'image': 'https://assets.coingecko.com/coins/images/52803/standard/vdiICVpT_400x400.png?1734344775',
          'coinName': 'sqrFUND',
          'price': '$0.001066',
          'percent': '12.8%',
          'prePrice': '$1,174,022',
          'prePriceTwo': '$1,174,022',
          'tradingVolume': '$67,075.72',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Ugly Dog',
          'image': 'https://assets.coingecko.com/coins/images/51605/standard/UglyDogToken.png?1731609058',
          'coinName': 'Ugly Dog',
          'price': '$0.001928',
          'percent': '5.9%',
          'prePrice': '$1,934,973',
          'prePriceTwo': '$1,934,973',
          'tradingVolume': '$147,359',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=gemxbt',
          'image': 'https://assets.coingecko.com/coins/images/52761/standard/icon_with_bg.jpeg?1734294652',
          'coinName': 'gemxbt',
          'price': '$0.001038',
          'percent': '11.6%',
          'prePrice': '$1,030,883',
          'prePriceTwo': '$1,030,883',
          'tradingVolume': '$306,515',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Roastmaster9000',
          'image': 'https://assets.coingecko.com/coins/images/52227/standard/IMG_8069.jpeg?1732800585',
          'coinName': 'Roastmaster9000',
          'price': '$0.002006',
          'percent': '21.0%',
          'prePrice': '$2,005,472',
          'prePriceTwo': '$2,005,472',
          'tradingVolume': '$190,710',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Nova on Mars',
          'image': 'https://assets.coingecko.com/coins/images/52356/standard/WhatsApp_Image_2024-10-29_at_21.33.39_fd8de977.jpg?1733171074',
          'coinName': 'Nova on Mars',
          'price': '$0.001088',
          'percent': '31.1%',
          'prePrice': '$1,083,681',
          'prePriceTwo': '$1,083,681',
          'tradingVolume': '$184,079',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Sendor',
          'image': 'https://assets.coingecko.com/coins/images/51655/standard/Untitled_%28200_x_200_px%29.png?1731700583',
          'coinName': 'Sendor',
          'price': '$0.002573',
          'percent': '15.2%',
          'prePrice': '$2,557,088',
          'prePriceTwo': '$2,557,088',
          'tradingVolume': '$183,167',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=FlowerAI',
          'image': 'https://assets.coingecko.com/coins/images/51982/standard/flowerAI.png?1732290392',
          'coinName': 'FlowerAI',
          'price': '$0.001179',
          'percent': '13.3%',
          'prePrice': '$1,170,896',
          'prePriceTwo': '$1,170,896',
          'tradingVolume': '$73,537.12',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Dojo Protocol',
          'image': 'https://assets.coingecko.com/coins/images/39426/standard/DOAI_Logo_200x200.png?1724961964',
          'coinName': 'Dojo Protocol',
          'price': '$0.002631',
          'percent': '6.3%',
          'prePrice': '$1,182,910',
          'prePriceTwo': '$2,632,297',
          'tradingVolume': '$66,738.58',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Internosaur',
          'image': 'https://assets.coingecko.com/coins/images/52528/standard/IMG_20241206_005616_421.jpg?1733567269',
          'coinName': 'Internosaur',
          'price': '$0.002119',
          'percent': '0.7%',
          'prePrice': '$1,946,398',
          'prePriceTwo': '$1,946,398',
          'tradingVolume': '$87,570.92',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Devin',
          'image': 'https://assets.coingecko.com/coins/images/38394/standard/IMG_5531.jpeg?1730168131',
          'coinName': 'Devin',
          'price': '$0.001654',
          'percent': '1.1%',
          'prePrice': '$1,647,262',
          'prePriceTwo': '$1,647,262',
          'tradingVolume': '$11,300.16',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=LEA AI',
          'image': 'https://assets.coingecko.com/coins/images/52025/standard/WEBLEABON2.png?1732355371',
          'coinName': 'LEA AI',
          'price': '$0.0009299',
          'percent': '25.8%',
          'prePrice': '$923,837',
          'prePriceTwo': '$923,837',
          'tradingVolume': '$304,855',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Rex',
          'image': 'https://assets.coingecko.com/coins/images/51704/standard/rex-symbol-UPDATE.png?1732982242',
          'coinName': 'Rex',
          'price': '$0.002557',
          'percent': '62.3%',
          'prePrice': '$2,452,084',
          'prePriceTwo': '$2,452,084',
          'tradingVolume': '$203,292',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Aletheia',
          'image': 'https://assets.coingecko.com/coins/images/51648/standard/Aletheia_Profile_Picture.jpeg?1731693061',
          'coinName': 'Aletheia',
          'price': '$0.001478',
          'percent': '9.5%',
          'prePrice': '$1,481,396',
          'prePriceTwo': '$1,481,396',
          'tradingVolume': '$133,184',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Mona Arcane',
          'image': 'https://assets.coingecko.com/coins/images/52212/standard/vPoP4H4J_400x400.jpg?1732750777',
          'coinName': 'Mona Arcane',
          'price': '$0.001084',
          'percent': '15.1%',
          'prePrice': '$1,085,560',
          'prePriceTwo': '$1,085,560',
          'tradingVolume': '$594,688',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Apicoin',
          'image': 'https://assets.coingecko.com/coins/images/52056/standard/Apicoin_logo_transp.png?1732452859',
          'coinName': 'Apicoin',
          'price': '$0.0009382',
          'percent': '5.4%',
          'prePrice': '$932,100',
          'prePriceTwo': '$932,100',
          'tradingVolume': '$150,778',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Cyphomancer',
          'image': 'https://assets.coingecko.com/coins/images/52111/standard/Coingecko.png?1732603640',
          'coinName': 'Cyphomancer',
          'price': '$0.0008031',
          'percent': '36.1%',
          'prePrice': '$746,838',
          'prePriceTwo': '$746,838',
          'tradingVolume': '$154,969',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Lucy AI',
          'image': 'https://assets.coingecko.com/coins/images/52687/standard/photo_2024-12-07_13-26-01.jpg?1734031582',
          'coinName': 'Lucy AI',
          'price': '$0.001041',
          'percent': '11.9%',
          'prePrice': '$1,031,238',
          'prePriceTwo': '$1,031,238',
          'tradingVolume': '$112,954',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        },
        {
          'log': 'http://d887537.r33.cpolar.top/web/data/image?name=Agent Rogue',
          'image': 'https://assets.coingecko.com/coins/images/52261/standard/Resize_image_project.png?1732864066',
          'coinName': 'Agent Rogue',
          'price': '$0.001188',
          'percent': '1.9%',
          'prePrice': '$1,182,360',
          'prePriceTwo': '$1,182,360',
          'tradingVolume': '$56,634.14',
          'oneHour': null,
          'dayHour': null,
          'sevenDay': null
        }
      ],
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
