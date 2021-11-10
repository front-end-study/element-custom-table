<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :border="border"
    :size="size"
    :stripe="stripe"
    :height="height"
    :maxHeight="maxHeight"
    :width="width"
    :rowKey="rowKey"
  >
    <template v-for="(column, index) in tableHeader">
      <el-table-column
        v-if="!column.type"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
        :min-width="column.minWidth"
        :key="index"
      >
        <template slot-scope="scope">
          <CustomSlot
            :params="scope.row"
            :render="column.render"
            v-if="column.functional"
          ></CustomSlot>
          <template v-else
            ><span :class="column.cssClass">{{
              scope.row[column.prop]
            }}</span></template
          >
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :key="index"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
        :type="column.type"
        :min-width="column.minWidth"
      ></el-table-column>
    </template>
  </el-table>
</template>

<script>
import CustomSlot from "./customSlot.vue";

export default {
  name: 'CustomTable',
  components: {
    CustomSlot,
  },
  props: {
    tableData: {
      type: Array,
      default: function () {
        return [];
      },
    },
    tableHeader: {
      type: Array,
      default: function () {
        return [];
      },
    },
    // 参数同Element表格：https://element.eleme.io/#/zh-CN/component/table
    border: {
      type: Boolean,
      default: false,
    },
    stripe: {
      type: Boolean,
      default: false,
    },
    height: [String, Number],
    maxHeight: [String, Number],
    size: String,
    width: [String, Number],
    rowKey: [String, Function],
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>