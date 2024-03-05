<template>
  <div class="home">
    <div class="left">
      <!-- <div class="form">
        <input v-model.trim="name" type="text" placeholder="消费名称">
        <input v-model.number="price" placeholder="消费价格">
        <button @click="add">添加账单</button>
      </div> -->
      <FormComponent :btnChange="add" v-model.trim="name" btnText="添加账单" idName="name" strTip="消费名称">
        <template #input>
          <input v-model.number="price" placeholder="消费价格">
        </template>
      </FormComponent>
      <table :style="{ color: isDarkMode ? '#fff' : '#000' }">
        <thead>
          <tr>
            <th>编号</th>
            <th>消费名称</th>
            <th>消费价格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-if="list.length > 0">
          <tr v-for="(item, index) in list" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td :class="{ red: item.price > 500 }">{{ item.price.toFixed(2) }}</td>
            <td><a href="" @click.prevent="del(item.id)" class="del">删除</a></td>
          </tr>
          <tr>
            <td colspan="4"><span>消费总计：{{ total }}</span></td>
          </tr>
        </tbody>
        <tfoot v-else>
          <tr>
            <td colspan="4">暂无数据</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <v-chart class="chart right" :option="option"/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { mapState } from 'vuex'
import FormComponent from '@/components/FormComponent.vue'
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])
export default {
  name: 'HomeView',
  components: {
    VChart,
    FormComponent
  },
  provide () {
    return {
      [THEME_KEY]: this.isDarkMode ? 'dark' : ''
    }
  },
  data () {
    return {
      name: '',
      price: '',
      list: [],
      option: {
        title: {
          text: '消费账单饼图',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '消费账单',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: 'Direct' },
              { value: 310, name: 'Email' },
              { value: 234, name: 'Ad Networks' },
              { value: 135, name: 'Video Ads' },
              { value: 1548, name: 'Search Engines' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  computed: {
    // 金额计算
    total () {
      return this.list.reduce((sum, item) => sum + item.price, 0)
    },
    // 暗黑模式状态
    ...mapState(['isDarkMode'])
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      const res = await axios.get('https://applet-base-api-t.itheima.net/bill', {
        params: {
          creator: '小张'
        }
      })
      this.list = res.data.data
      // console.log(this.list)
      this.option.series = [
        {
          data: this.list.map((item) => ({ value: item.price, name: item.name }))
        }
      ]
    },
    async add () {
      if (!this.name || !this.price) {
        return alert('请输入完整信息')
      }
      await axios.post('https://applet-base-api-t.itheima.net/bill', {
        creator: '小张',
        name: this.name,
        price: this.price
      })
      this.name = ''
      this.price = ''
      this.getList()
    },
    async del (id) {
      await axios.delete(`https://applet-base-api-t.itheima.net/bill/${id}`)
      this.getList()
      console.log('删除成功')
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
}

.red {
  color: #f13c22;
}

.home {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 30px;
  height: calc(100vh - 75px);
}

.left {
  &>table {
    width: 100%;
    border-collapse: collapse;
    color: $color-theme-light;

    &>tfoot>tr,
    &>tbody>tr,
    &>thead>tr {
      border-bottom: 1px solid #ccc;
      text-align: center;
      line-height: 30px;
    }

    &>tbody>tr {
      &:hover {
        background-color: #ccc;
      }

      &:nth-last-child(1) {
        &:hover {
          background-color: unset;
        }
      }
    }
  }
}

.form {
  display: flex;
  align-items: center;
  padding: 5px;

  &>button {
    height: 35px;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    background: #4b83d6;
    color: white;
    border-radius: 2px;

    &:hover {
      box-shadow: 1px 1px 1px rgba(89, 149, 240, 0.6);
    }
  }

  &>input {
    width: 300px;
    outline: none;
    border: none;
    padding-left: 5px;
    height: 35px;
    border: 1px solid #ccc;
    margin: 10px;

    &:focus {
      border: 1px solid #6d9ee7;
    }
  }
}

.del {
  cursor: pointer;
  color: $bg-color-link-active;
  text-decoration: none;

  &:hover {
    color: $color-link-active;
  }
}

.right {
  width: 700px;
  height: 500px;
  margin-left: 20px;
}
</style>
