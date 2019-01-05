<template>
    <div class="solution">
        <el-table :data="tableData" border style="width: 100%" header-cell-style="background:#008DD7;color:#fff">
            <el-table-column prop="brand" label="供应商品牌" width="100" align="center">
            </el-table-column>
            <el-table-column prop="type" label="产品型号" width="120" align="center">
                <template slot-scope="scope">
                    <el-tag size="medium">{{ scope.row.type }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="mics" label="MICs" width="70" align="center">
            </el-table-column>
            <el-table-column prop="size" label="size" width="160" align="center">
            </el-table-column>
            <el-table-column prop="pinNumber" label="pin number" width="120" align="center">
            </el-table-column>
            <el-table-column prop="BTProfile" label="BT Profile" width="150" align="center">
            </el-table-column>
            <el-table-column prop="description" label="Description" width="350" align="center">
            </el-table-column>
            <el-table-column prop="power" label="平均功耗" width="100" align="center">
            </el-table-column>
            <el-table-column prop="market" label="应用市场" width="160" align="center">
            </el-table-column>
            <el-table-column label="" width="" align="center">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="toDetail()">查看详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import Vue from "vue";
import { Table, TableColumn, Button, Tag } from "element-ui";

Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);
Vue.use(Tag);

export default {
  name: "solution",
  data() {
    return {
      tableData: [
        {
          brand: "海凌威",
          type: "WT-200M",
          mics: "2",
          size: "QFN4*6*1.2MM",
          pinNumber: "40B",
          BTProfile: "BT 4.2 dual mode",
          description: "单耳，单声道",
          power: "15MA",
          market: "单声道耳机"
        },
        {
          brand: "海凌威",
          type: "WT-200S",
          mics: "2",
          size: "QFN4*6*1.2MM",
          pinNumber: "40B",
          BTProfile: "BT 4.2 dual mode",
          description: "双耳，立体声",
          power: "15MA",
          market: "立体声耳机"
        },
        {
          brand: "海凌威",
          type: "WT-200U",
          mics: "2",
          size: "QFN4*6*1.2MM",
          pinNumber: "48B",
          BTProfile: "BT 4.2 dual mode",
          description: "4.2TWS，单边通话",
          power: "23MA",
          market: "TWS+单边通话耳机"
        },
        {
          brand: "海凌威",
          type: "BES2000U",
          mics: "2",
          size: "QFN4*6*1.2MM",
          pinNumber: "48B",
          BTProfile: "BT 4.2 dual mode",
          description: "4.2TWS，单边通话",
          power: "23MA",
          market: "TWS+单边通话耳机"
        },
        {
          brand: "海凌威",
          type: "BES2000IZ",
          mics: "3",
          size: "BGA4.5*5.9*1.0MM",
          pinNumber: "80B",
          BTProfile: "BT 4.2 dual mode",
          description:
            "Support  low power  stereo earphone/基础版低功耗TWS功能;",
          power: "21MA",
          market: "TWS+双边通话耳机"
        },
        {
          brand: "海凌威",
          type: "BES2300L",
          mics: "3",
          size: "BGA4.5*6.2*1.0MM",
          pinNumber: "80B",
          BTProfile: "BT 5.0 dual mode",
          description:
            "Support  low power  stereo earphone/基础版低功耗TWS功能;",
          power: "8-10MA",
          market: "TWS+双边通话耳机+低功耗"
        },
        {
          brand: "海凌威",
          type: "BES2300H",
          mics: "3",
          size: "BGA4.5*6.2*1.0MM",
          pinNumber: "80B",
          BTProfile: "BT 5.0 dual mode",
          description: "Support  low power  TWS earphone/+主从切换功能",
          power: "8-10MA",
          market: "TWS+双边通话耳机+主从切换+低功耗"
        },
        {
          brand: "海凌威",
          type: "BES2300IH",
          mics: "3",
          size: "BGA2.7*4.4*1.0MM",
          pinNumber: "48B",
          BTProfile: "BT 5.0 dual mode",
          description: "BT5.0+低功耗+立体声",
          power: "7MA",
          market: "低功耗小封装耳机"
        },
        {
          brand: "海凌威",
          type: "BES2300Y",
          mics: "5",
          size: "BGA4.5*6.2*1.2MM",
          pinNumber: "80B",
          BTProfile: "BT 5.0 dual mode",
          description:
            "Support  low power  TWS or Stereo Hybrid ANC and Voice AI/混合ANC+TWS",
          power: "12MA",
          market: "TWS+ANC主动降噪"
        },
        {
          brand: "海凌威",
          type: "BES1400XX",
          mics: "2",
          size: "QFN4*6*1.2MM",
          pinNumber: "40B",
          BTProfile: "BT 5.0 dual mode",
          description: "BT5.0低功耗双耳，立体声",
          power: "6MA",
          market: "低功耗立体声耳机"
        }
      ]
    };
  },
  filters: {},
  methods: {
    toDetail() {}
  }
};
</script>

<style scoped lang="less">
.solution {
  padding: 120px 0 50px 0;
  width: 75%;
  margin: 0 auto;
}
</style>
