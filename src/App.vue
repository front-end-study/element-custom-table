<template>
  <div id="app">
    <section>
      <h3>基础表格</h3>
      <CustomTable
        class="customTable"
        :tableData="tableData1"
        :tableHeader="tableHeader1"
        border
      ></CustomTable>
    </section>
    <section>
      <h3>使用render函数渲染</h3>
      <CustomTable
        class="customTable"
        :tableData="tableData1"
        :tableHeader="tableHeader2"
        border
        stripe
      ></CustomTable>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tableData1: [],
      tableHeader1: [
        { prop: "name", label: "姓名" },
        { prop: "age", label: "年龄" },
        { prop: "address", label: "地址" },
      ],
      tableData2: [],
      tableHeader2: [
        { type: "selection" },
        { prop: "name", label: "姓名" },
        { prop: "age", label: "年龄" },
        { prop: "address", label: "地址" },
        {
          label: "操作",
          functional: true,
          render: (h, params) => {
            return [
              h(
                "span",
                {
                  on: {
                    click: () => {
                      console.log("详情", params);
                    },
                  },
                  class: {
                    operationBtn: true,
                  },
                },
                "详情"
              ),
              h(
                "span",
                {
                  on: {
                    click: () => {
                      console.log("编辑", params);
                    },
                  },
                  class: {
                    operationBtn: true,
                  },
                },
                "编辑"
              ),
            ];
          },
        },
      ],
    };
  },
  mounted() {
    this.initData1();
  },
  methods: {
    initData1() {
      this.tableData1 = new Array(5).fill(1).map((d, index) => {
        return {
          name: `老汪${index + 1}`,
          age: Math.round(Math.random() * 100),
          address: `上海市普陀区金沙江路 ${Math.round(
            Math.random() * 1000
          )} 弄`,
        };
      });
    },
  },
};
</script>
<style lang="css" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 24px;
}

section {
  background-color: #f6f6f65b;
  border: 1px solid #f6f6f65b;
  padding: 12px 12px;
  border-radius: 4px;
  margin-top: 30px;
}

::v-deep .customTable .operationBtn {
  color: rgb(97, 97, 214);
  margin-right: 12px;
  cursor: pointer;
}
</style>
